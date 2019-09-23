import * as imageService from '../../../imageServices';
import getAuthenticatedUser from '../services/authentication';
import * as service from '../services/item';

export const types = [
  `
  input ItemInput {
    pictures: [Upload]!
    type: String!
    title: String!
    date: String!
    technique: String!
    description: String
    length: Int
    height: Int!
    width: Int!
  }
  `,
];

export const mutations = [
  `
  addItem (
    input: ItemInput!
  ): Item!
  
  updateItem (
    id: ID!
    input: ItemInput!
  ): Item!
  
  deleteItem(
     id: ID!
     type: String!
  ): ID!
`,
];

export const resolvers = {
  Mutation: {
    async addItem(
      root,
      {
        input: { pictures, type, ...data },
      },
      { req },
    ) {
      const isAdmin = await getAuthenticatedUser(req);

      if (!isAdmin) throw new Error("Erreur d'authentification");

      const { title } = data;

      const item = await service.getItemByName(title, type);

      if (item) throw new Error("Nom de l'item déjà existant en Bdd");

      const res = await imageService.processImageUpload(pictures, title, type);

      if (!res) throw new Error("Erreur à l'écriture des fichiers");

      const newItem = await service.addItemInBdd(data, type);

      if (!newItem)
        throw new Error("Erreur à l'enregistrement en base de donnée");
      return newItem;
    },

    async updateItem(
      root,
      {
        id,
        input: { pictures, type, ...data },
      },
      { req },
    ) {
      const isAdmin = await getAuthenticatedUser(req);
      if (!isAdmin) throw new Error("Erreur d'authentification");

      const oldItem = await service.getItemById(id, type);
      if (!oldItem) throw new Error('Item à modifier introuvable en BDD');

      const { title } = data;
      const itemByName = await service.getItemByName(title, type);
      if (itemByName && itemByName.id !== id)
        throw new Error("Nom d'item déjà existant en Bdd");

      const oldTitle = oldItem.title;
      if (pictures.length > 0) {
        const imageDeleted = await imageService.deleteItemImages(
          oldTitle,
          type,
        );

        if (!imageDeleted)
          throw new Error(`Echec de la suppression des anciennes images`);

        const res = await imageService.processImageUpload(
          pictures,
          title,
          type,
        );
        if (!res) throw new Error("Erreur à l'écriture des nouveaux fichiers");
      } else if (oldTitle !== title) {
        const res = await imageService.renameItemImages(oldTitle, title, type);
        if (!res) throw new Error('Erreur au renommage des fichiers');
      }

      const updatedItem = await service.updateItemInBdd(id, data, type);
      if (!updatedItem)
        throw new Error("Erreur à l'enregistrement en base de donnée");
      return updatedItem;
    },

    async deleteItem(root, { id, type }, { req }) {
      const isAdmin = await getAuthenticatedUser(req);
      if (!isAdmin) throw new Error("Erreur d'authentification");

      const item = await service.getItemById(id, type);
      if (!item) throw new Error('Item absent en BDD');

      const isDeleted = await imageService.deleteItemImages(item.title, type);
      if (!isDeleted) throw new Error(`Echec de la suppression des images`);
      else {
        service
          .deleteItemInBdd(id, type)
          .then(res => res)
          .catch(() => {
            throw new Error('Echec de la suppression en Bdd');
          });
      }
      return id;
    },
  },
};
