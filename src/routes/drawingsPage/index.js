import React from 'react';
import DrawingsPage from './DrawingsPage';
import Layout from '../../components/GeneralLayout/Layout';
import ITEM_CONSTANTS from '../../constants/itemConstants';

async function action() {
  const title = ITEM_CONSTANTS.TITLE.DRAWING;
  const description = ITEM_CONSTANTS.META_DESCRIPTION.DRAWING;

  return {
    title,
    description,
    chunks: ['drawings'],
    component: (
      <Layout>
        <DrawingsPage title={title} />
      </Layout>
    ),
  };
}

export default action;
