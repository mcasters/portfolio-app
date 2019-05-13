import React from 'react';
import SculpturesPage from './SculpturesPage';
import Layout from '../../components/GeneralLayout/Layout';
import ITEM_CONSTANTS from '../../constants/itemConstants';

async function action() {
  const title = ITEM_CONSTANTS.TITLE.SCULPTURE;

  return {
    title,
    description: ITEM_CONSTANTS.META_DESCRIPTION.SCULPTURE,
    chunks: ['drawings'],
    component: (
      <Layout>
        <SculpturesPage title={title} />
      </Layout>
    ),
  };
}

export default action;
