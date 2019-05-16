import React from 'react';

import Layout from '../../components/GeneralLayout/Layout';
import CONTENT_CONSTANTS from '../../constants/contentConstants';
import META_HTML_CONSTANTS from '../../constants/metaHtmlConstants';
import PresentationPage from './PresentationPage';

function action() {
  const title = CONTENT_CONSTANTS.TITLE.PRESENTATION;
  const description = META_HTML_CONSTANTS.META_DESCRIPTION.PRESENTATION;

  return {
    title,
    description,
    chunks: ['presentation'],
    component: (
      <Layout>
        <PresentationPage title={title} />
      </Layout>
    ),
  };
}

export default action;
