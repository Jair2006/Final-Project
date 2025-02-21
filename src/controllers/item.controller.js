import Item from "../models/item.model.js";
import { Op } from "sequelize";

export const getItems = async () => {
  let data = await Item.findAll();
  return data;
};

export const getItemById = async (id) => {
  const data = await Item.findByPk(id);
  return data;
};

export const getItemsBySearch = async () => {
  let data = await Item.findAll();
  return data;
};

export const createItem = async (body) => {
  let data = await Item.create(body);
  return data;
};

export const updateItem = async (id, body) => {
  let data = await Item.update(body, {
    where: {
      id: id,
    },
  });
  console.log(data);
  return data;
};

export const deleteItem = async (id) => {
  let data = await Item.destroy({
    where: {
      id: id,
    },
  });
  return data;
};
