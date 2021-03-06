import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useStyles from 'isomorphic-style-loader/useStyles';

import s from './Image.css';
import ITEM from '../../../constants/item';
import LAYOUT_CONSTANTS from '../../../constants/layoutConstants';
import LightBoxProvider from '../../LightBoxProvider';
import ItemService from '../../../app-services/ItemService';
import useViewport from '../../Hooks/useViewport';

function Image({ title, type }) {
  useStyles(s);
  const { width } = useViewport();
  const [isOpen, setIsOpen] = useState(false);

  const isLessThanSM = width < LAYOUT_CONSTANTS.BREAKPOINT.SM;
  const itemService = new ItemService(type);
  const itemPath = itemService.getPath();
  const alt = itemService.getAltImage();
  const isSculpture = itemService.getIsSculpture();

  let currentImagePath;
  let largeImagePath;

  const setPath = () => {
    currentImagePath = isLessThanSM
      ? `${itemPath}/${ITEM.SM_SIZE}`
      : `${itemPath}/${ITEM.MD_SIZE}`;
    largeImagePath = isLessThanSM
      ? `${itemPath}/${ITEM.MD_SIZE}`
      : `${itemPath}`;
  };

  const lightBoxHandler = open => {
    setIsOpen(open);
  };

  const getSrcList = isCurrent => {
    const list = [];
    const path = isCurrent ? `${currentImagePath}` : `${largeImagePath}`;

    if (!isSculpture) {
      list.push(`${path}/${title}.jpg`);
    } else {
      for (let i = 1; i < 5; i++) {
        list.push(`${path}/${title}_${i}.jpg`);
      }
    }
    return list;
  };

  const openLightBox = () => {
    setIsOpen(true);
  };

  setPath();

  const currentSrcList = getSrcList(true);
  const largeSrcList = getSrcList(false);
  return (
    <>
      <figure>
        {currentSrcList.map(src => (
          <button
            type="button"
            className={isSculpture ? s.sculptureButton : s.imageButton}
            onClick={openLightBox}
            key={src}
          >
            <img src={src} alt={alt} className={s.image} />
          </button>
        ))}
      </figure>
      {isOpen && typeof window !== 'undefined' && (
        <LightBoxProvider
          title={title}
          type={type}
          srcList={largeSrcList}
          toggle={lightBoxHandler}
        />
      )}
    </>
  );
}

Image.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Image;
