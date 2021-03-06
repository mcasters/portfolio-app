/* eslint-disable css-modules/no-unused-class */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import useStyles from 'isomorphic-style-loader/useStyles';
import normalizeCss from '../../../../node_modules/normalize.css/normalize.css';

import styleModal from '../../../../modules_modifications/style-modal.css';
import styleTabs from '../../../../modules_modifications/style-tabs.css';
import styleDayPicker from '../../../../modules_modifications/style-dayPicker.css';
import s from './Layout.css';
import Header from '../Header';
import Footer from '../Footer';
import Navigation from '../Navigation';
import LAYOUT_CONSTANTS from '../../../constants/layoutConstants';
import ErrorBoundary from '../../ErrorBoundary';
import AppContext from '../../../context';
import Main from '../Main';
import useViewport from '../../Hooks/useViewport';

function Layout({ children }) {
  useStyles(normalizeCss, styleModal, styleTabs, styleDayPicker, s);
  const { windowWidth, windowHeight } = useViewport();
  const [headerHeight, setHeaderHeight] = useState(0);
  const context = useContext(AppContext);

  const isHome = context.pathname === '/' || context.pathname === '/home';
  const isLessThanMD = windowWidth < LAYOUT_CONSTANTS.BREAKPOINT.MD;

  const getHeight = h => setHeaderHeight(h);

  return (
    <>
      <ErrorBoundary>
        <Header isHome={isHome} onHeight={getHeight} />
        <Navigation isLessThanMD={isLessThanMD} isHome={isHome} />

        <Main
          isHome={isHome}
          isLessThanMD={isLessThanMD}
          height={windowHeight}
          headerHeight={headerHeight}
        >
          {children}
        </Main>
        <Footer />
      </ErrorBoundary>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
