import ITEM_CONSTANTS from '../../../constants/itemConstants';
import { Drawing, Painting, Sculpture } from '../../models';

export const getItemByName = async (title, type) => {
  if (type === ITEM_CONSTANTS.TYPE.PAINTING)
    return Painting.findOne({
      where: { title },
    });
  if (type === ITEM_CONSTANTS.TYPE.DRAWING)
    return Drawing.findOne({
      where: { title },
    });
  return Sculpture.findOne({
    where: { title },
  });
};

export const getItemById = async (id, type) => {
  if (type === ITEM_CONSTANTS.TYPE.PAINTING)
    return Painting.findOne({
      where: { id },
    });
  if (type === ITEM_CONSTANTS.TYPE.DRAWING)
    return Drawing.findOne({
      where: { id },
    });
  return Sculpture.findOne({
    where: { id },
  });
};

export const addItemInBdd = async (data, type) => {
  if (type === ITEM_CONSTANTS.TYPE.PAINTING) return Painting.create(data);
  if (type === ITEM_CONSTANTS.TYPE.DRAWING) return Drawing.create(data);
  return Sculpture.create(data);
};

export const updateItemInBdd = async (data, type) => {
  const { id } = data;
  if (type === ITEM_CONSTANTS.TYPE.PAINTING)
    return Painting.update({
      data,
      where: { id },
    });
  if (type === ITEM_CONSTANTS.TYPE.DRAWING)
    return Drawing.update({
      data,
      where: { id },
    });
  return Sculpture.update({
    data,
    where: { id },
  });
};

export const deleteItemInBdd = async (id, type) => {
  if (type === ITEM_CONSTANTS.TYPE.PAINTING)
    return Painting.destroy({
      where: { id },
    });
  if (type === ITEM_CONSTANTS.TYPE.DRAWING)
    return Drawing.destroy({
      where: { id },
    });
  return Sculpture.destroy({
    where: { id },
  });
};
