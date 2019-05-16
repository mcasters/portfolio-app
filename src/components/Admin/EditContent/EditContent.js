import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Query } from 'react-apollo/index';

import Alert from '../../Alert';
import s from './EditContent.css';
import GET_ALL_CONTENT from '../../../data/graphql/queries/getAllContent.graphql';
import MutateContent from './MutateContent';

class EditContent extends React.Component {
  static propTypes = {
    keyContent: PropTypes.string.isRequired,
    isTextArea: PropTypes.bool.isRequired,
  };

  render() {
    const { keyContent, isTextArea } = this.props;

    return (
      <Query
        query={GET_ALL_CONTENT}
        variables={{ keyContent }}
        onError={e => <Alert message={e} isError />}
        ssr
      >
        {({ data }) => {
          if (data.getAllContent) {
            return data.getAllContent.map(({ id, key, text }) => {
              if (key === keyContent)
                return (
                  <MutateContent
                    key={id}
                    keyContent={keyContent}
                    isTextArea={isTextArea}
                    initialContent={text}
                  />
                );
              return null;
            });
          }
          return null;
        }}
      </Query>
    );
  }
}

export default withStyles(s)(EditContent);