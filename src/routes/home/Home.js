import React from 'react';
import PropTypes from 'prop-types';

import HomePage from '../../components/HomePage';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <HomePage />
      </div>
    );
  }
}

export default Home;
