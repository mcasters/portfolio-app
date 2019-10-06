import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import PropTypes from 'prop-types';

import s from './Header.css';
import GLOB_CONST from '../../../constants/globalConstants';
import WithScrolling from '../../WithScrolling';

class Header extends React.Component {
  refCallback = element => {
    if (element) {
      const { height } = element.getBoundingClientRect();
      this.props.getHeight(height);
    }
  };

  render() {
    const title = GLOB_CONST.SITE_TITLE;
    const { isHome, getHeight } = this.props;
    const isScrolling = this.props.scroll > 0;
    return isHome ? (
      <header>
        <div
          ref={getHeight !== null && this.refCallback}
          className={s.homeContainer}
        >
          <h1>{title}</h1>
        </div>
      </header>
    ) : (
      <header>
        <div
          className={
            isScrolling ? `${s.container} ${s.sticky}` : `${s.container}`
          }
        >
          <h1>{title}</h1>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  isHome: PropTypes.bool.isRequired,
  scroll: PropTypes.number.isRequired,
  getHeight: PropTypes.func.isRequired,
};
export default withStyles(s)(WithScrolling(Header));