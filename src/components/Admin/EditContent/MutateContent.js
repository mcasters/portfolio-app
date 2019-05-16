import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Mutation } from 'react-apollo/index';

import ADD_CONTENT_MUTATION from '../../../data/graphql/queries/addContentMutation.graphql';
import Alert from '../../Alert';
import s from './EditContent.css';
import GET_CONTENT_QUERY from '../../../data/graphql/queries/getContent.graphql';

class MutateContent extends React.Component {
  static propTypes = {
    keyContent: PropTypes.string.isRequired,
    isTextArea: PropTypes.bool.isRequired,
    initialContent: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      text: this.props.initialContent,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ text: e.target.value });
  };

  render() {
    const { keyContent, isTextArea } = this.props;
    let inputOnChange;

    return (
      <Mutation
        mutation={ADD_CONTENT_MUTATION}
        update={(cache, { data: { addContent } }) => {
          cache.writeQuery({
            query: GET_CONTENT_QUERY,
            variables: {
              keyContent,
            },
            data: { getContent: addContent },
          });
        }}
        ssr
      >
        {(mutation, { error, data }) => {
          return (
            <Fragment>
              <form
                className="formGroup"
                onSubmit={e => {
                  e.preventDefault();
                  mutation({
                    variables: {
                      input: {
                        key: keyContent,
                        text: inputOnChange.value,
                      },
                    },
                  });
                }}
              >
                {!isTextArea && (
                  <input
                    ref={node => {
                      inputOnChange = node;
                    }}
                    placeholder={keyContent}
                    name="text"
                    type="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                  />
                )}
                {isTextArea && (
                  <textarea
                    ref={node => {
                      inputOnChange = node;
                    }}
                    placeholder={keyContent}
                    name="textarea"
                    value={this.state.text}
                    onChange={this.handleChange}
                  />
                )}
                <button type="submit">OK</button>
              </form>
              {error && <Alert message={error.message} isError />}
              {data && data.addContent && (
                <Alert message="Enregistré" isError={false} />
              )}
            </Fragment>
          );
        }}
      </Mutation>
    );
  }
}

export default withStyles(s)(MutateContent);