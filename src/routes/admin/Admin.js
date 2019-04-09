import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs';

import s from './Admin.css';
import AddItem from '../../components/ItemDir/ItemAdd';
import ITEM_CONSTANTS from '../../constants/itemConstants';
import ItemList from '../../components/ItemDir/ItemList';
import Logout from '../../components/Logout';

class Admin extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      allPaintingImages: this.importAllImages(
        require.context(
          './../../../../photo-files/painting',
          false,
          /\.jpe?g$/,
        ),
      ),
      allDrawingImages: this.importAllImages(
        require.context('./../../../../photo-files/drawing', false, /\.jpe?g$/),
      ),
      allSculptureImages: this.importAllImages(
        require.context(
          './../../../../photo-files/sculpture',
          false,
          /\.jpe?g$/,
        ),
      ),
    };
  }

  importAllImages = r => {
    const images = new Map();
    r.keys().forEach(item => {
      images.set(item.replace('./', ''), r(item));
    });
    return images;
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <Logout />
          <Tabs className={s.tabs}>
            <TabList>
              <Tab>{ITEM_CONSTANTS.TITLE.PAINTING}</Tab>
              <Tab>{ITEM_CONSTANTS.TITLE.SCULPTURE}</Tab>
              <Tab>{ITEM_CONSTANTS.TITLE.DRAWING}</Tab>
            </TabList>
            <TabPanel>
              <AddItem type={ITEM_CONSTANTS.TYPE.PAINTING} />
              <ItemList
                type={ITEM_CONSTANTS.TYPE.PAINTING}
                allImages={this.state.allPaintingImages}
              />
            </TabPanel>
            <TabPanel>
              <AddItem type={ITEM_CONSTANTS.TYPE.SCULPTURE} />
              <ItemList
                type={ITEM_CONSTANTS.TYPE.SCULPTURE}
                allImages={this.state.allSculptureImages}
              />
            </TabPanel>
            <TabPanel>
              <AddItem type={ITEM_CONSTANTS.TYPE.DRAWING} />
              <ItemList
                type={ITEM_CONSTANTS.TYPE.DRAWING}
                allImages={this.state.allDrawingImages}
              />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Admin);
