import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';

import s from './Page.css';

class Page extends React.Component {
  render() {
    const { title, html, showTitle } = this.props;
    return (
      <article className={s.pageContent}>
        <h1 className={showTitle ? '' : s.title}>{title}</h1>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    );
  }
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  showTitle: PropTypes.bool.isRequired,
};

export default withStyles(s)(Page);