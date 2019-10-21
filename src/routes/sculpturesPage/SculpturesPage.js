import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import useStyles from 'isomorphic-style-loader/src/useStyles';

import Item from '../../components/ItemDir/Item';
import ITEM from '../../constants/item';
import s from './SculpturesPage.css';
import GET_ITEMS_QUERY from '../../data/graphql/queries/getAllItems.graphql';

function SculpturesPage({ title }) {
  useStyles(s);
  const type = ITEM.SCULPTURE.TYPE;
  const { data, loading, error } = useQuery(GET_ITEMS_QUERY, {
    variables: { type },
    ssr: true,
  });
  if (loading) return <div className={s.loading}>Chargement...</div>;
  if (error) return <div>Erreur au chargement des sculptures :(</div>;

  return (
    <>
      <h1 className={s.title}>{title}</h1>
      {data.getAllItems &&
        data.getAllItems.map((sculpture, index) => (
          <Item
            key={sculpture.name}
            item={sculpture}
            type={type}
            index={index}
          />
        ))}
    </>
  );
}

SculpturesPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SculpturesPage;
