/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-syntax */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Mutation } from 'react-apollo';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import dayPicker from 'react-day-picker/lib/style.css';
import format from 'date-fns/format';
import axios from 'axios';
import path from 'path';

import s from './ItemAdd.css';
import PAINTING_MUTATION from './addPaintingMutation.graphql';
import SCULPTURE_MUTATION from './addSculptureMutation.graphql';
import DRAWING_MUTATION from './addDrawingMutation.graphql';
import ITEM_CONSTANTS from '../../../constants/itemConstants';
import Alert from '../../Alert';

class ItemAdd extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.isSculpture = this.props.type === ITEM_CONSTANTS.TYPE.SCULPTURE;
    this.state = this.getInitialState();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.getImage = this.getImage.bind(this);
    this.saveImage = this.saveImage.bind(this);
    this.getItem = this.getItem.bind(this);
    this.complete = this.complete.bind(this);
    this.setError = this.setError.bind(this);

    if (this.props.type === ITEM_CONSTANTS.TYPE.PAINTING) {
      this.query = PAINTING_MUTATION;
    }
    if (this.props.type === ITEM_CONSTANTS.TYPE.SCULPTURE) {
      this.query = SCULPTURE_MUTATION;
    }
    if (this.props.type === ITEM_CONSTANTS.TYPE.DRAWING) {
      this.query = DRAWING_MUTATION;
    }
  }

  getInitialState = () => ({
    title: '',
    date: '',
    technique: '',
    description: '',
    length: '',
    height: '',
    width: '',
    imagePreviewUrls: ['', '', '', ''],
    files: ['', '', '', ''],
    isComplete: false,
    error: null,
  });

  getImage(e, index) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    const imagePreviewUrls = this.state.imagePreviewUrls;
    const files = this.state.files;
    reader.onload = () => {
      imagePreviewUrls.splice(index, 1, reader.result);
      files.splice(index, 1, file);

      this.setState({ imagePreviewUrls });
      this.setState({ files });
    };
    reader.readAsDataURL(file);
  }

  getItem = () => {
    const item = {
      title: this.state.title,
      date: this.state.date,
      technique: this.state.technique,
      description: this.state.description,
      width: this.state.width,
      height: this.state.height,
    };
    return this.isSculpture ? { ...item, length: this.state.length } : item;
  };

  setError = error => {
    this.setState({ error });
  };

  saveImage = async () => {
    const title = this.state.title;
    const newExtension = '.jpg';
    let extension = null;

    if (!this.isSculpture) {
      const file = this.state.files[0];
      extension = path.extname(file.name);

      if (extension !== '.jpeg' && extension !== '.jpg') {
        this.setState({
          error: 'Fichiers jpg ou jpeg seulement',
        });
        return false;
      }

      const fileName = title + newExtension;
      const formData = new FormData();
      formData.append('fileName', fileName);
      formData.append('type', this.props.type);
      formData.append('file', file);

      const res = await axios.post('/uploadImage', formData);

      if (res.data !== undefined && !res.data.success) {
        this.setState({ error: "Erreur d'upload du fichier" });
        return false;
      }
      return true;
    }
    const files = this.state.files;

    let count = 1;
    for await (const file of files) {
      extension = path.extname(file.name);

      if (extension !== '.jpeg' && extension !== '.jpg') {
        this.setState({
          error: 'Fichiers jpg ou jpeg seulement',
        });
        return false;
      }
      const fileName = `${title}_${count}${newExtension}`;
      const formData = new FormData();

      formData.append('fileName', fileName);
      formData.append('type', this.props.type);
      formData.append('file', file);

      const res = await axios.post('/uploadImage', formData);

      if (res.data !== undefined && !res.data.success) {
        this.setState({ error: "Erreur d'upload du fichier" });
        return false;
      }
      count += 1;
    }
    return true;
  };

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleDayChange(selectedDay) {
    this.setState({ date: selectedDay });
  }

  complete = () => {
    this.setState(this.getInitialState());
    this.setState({ isComplete: true });
  };

  render() {
    const title = 'Ajout';

    const haveMain =
      this.state.title &&
      this.state.date &&
      this.state.technique &&
      this.state.height &&
      this.state.width &&
      this.state.files.length > 0;
    const canSubmit =
      (!this.isSculpture && haveMain) ||
      (this.isSculpture && haveMain && this.state.length);

    return (
      <Mutation mutation={this.query}>
        {(mutation, { error }) => (
          <div className={s.addContainer}>
            <h2>{title}</h2>
            <form
              className="formGroup"
              onSubmit={e => {
                e.preventDefault();
                this.saveImage().then(res => {
                  if (res) {
                    const item = this.getItem();
                    mutation({ variables: { item } });
                    this.complete();
                  }
                });
              }}
            >
              <input
                placeholder="Titre"
                name="title"
                type="text"
                value={this.state.title}
                onChange={this.handleInputChange}
              />
              <div className={s.DayInputContainer}>
                <DayPickerInput
                  value={this.state.date}
                  onDayChange={this.handleDayChange}
                  dayPickerProps={{ ...this.state.date }}
                  formatDate={format}
                  format={ITEM_CONSTANTS.FORMAT_DATE}
                  placeholder="Date"
                />
              </div>
              <input
                placeholder="Technique"
                name="technique"
                type="text"
                value={this.state.technique}
                onChange={this.handleInputChange}
              />
              <input
                placeholder="Description"
                name="description"
                type="text"
                value={this.state.description}
                onChange={this.handleInputChange}
              />
              <input
                placeholder="Hauteur (cm)"
                name="height"
                type="number"
                value={this.state.height}
                onChange={this.handleInputChange}
              />
              <input
                placeholder="Largeur (cm)"
                name="width"
                type="text"
                value={this.state.width}
                onChange={this.handleInputChange}
              />
              {this.isSculpture && (
                <input
                  placeholder="Longueur (cm)"
                  name="length"
                  type="number"
                  value={this.state.length}
                  onChange={this.handleInputChange}
                />
              )}
              <input
                placeholder="Image"
                type="file"
                onChange={e => this.getImage(e, 0)}
              />
              {this.isSculpture && (
                <div>
                  <input
                    placeholder="Image 2"
                    type="file"
                    onChange={e => this.getImage(e, 1)}
                  />
                  <input
                    placeholder="Image 3"
                    type="file"
                    onChange={e => this.getImage(e, 2)}
                  />
                  <input
                    placeholder="Image 4"
                    type="file"
                    onChange={e => this.getImage(e, 3)}
                  />
                </div>
              )}
              {this.state.imagePreviewUrls.map(
                imagePreviewUrl =>
                  imagePreviewUrl !== '' && (
                    <img
                      key={imagePreviewUrl.toString()}
                      src={imagePreviewUrl}
                      alt="Sculpture de Marion Casters"
                      className={s.imagePreview}
                    />
                  ),
              )}
              {canSubmit && <button type="submit">OK</button>}
            </form>

            <button onClick={this.openAlert}>coucou</button>
            {error && <Alert message={error} isError />}
            {this.state.isComplete && (
              <Alert message="Enregistré" isError={false} />
            )}
            {this.state.error && <Alert message={this.state.error} isError />}
          </div>
        )}
      </Mutation>
    );
  }
}

export default withStyles(s, dayPicker)(ItemAdd);
