import React from 'react';
import PropTypes from 'prop-types';
import useStyles from 'isomorphic-style-loader/useStyles';

import Image from '../Image';
import s from './Item.css';
import ITEM from '../../../constants/item';

function Item({ item, type }) {
  useStyles(s);

  return (
    <article className={s.itemContainer}>
      <h2 className={s.itemTitle}>{item.title}</h2>
      <Image type={type} title={item.title} />
      <span className={s.noWrap}>
        {new Date(item.date).toLocaleDateString()}
      </span>
      <span className={s.spacer}> | </span>
      <span className={s.noWrap}>{item.technique}</span>
      <span className={s.spacer}> | </span>
      {type === ITEM.SCULPTURE.TYPE && (
        <span className={s.noWrap}>
          {item.height} x {item.width} x {item.length} cm
        </span>
      )}
      {type !== ITEM.SCULPTURE.TYPE && (
        <span className={s.noWrap}>
          {item.height} x {item.width} cm
        </span>
      )}
    </article>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    technique: PropTypes.string,
    description: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    length: PropTypes.number,
  }).isRequired,
  type: PropTypes.string.isRequired,
};

export default Item;
