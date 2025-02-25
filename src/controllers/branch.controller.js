import Branch from "../models/branch.model.js";
import Item from "../models/item.model.js";
import BranchItem from "../models/branch_item.model.js";
import { convertToQr } from "../utils/qr.js";

export const getBranches = async () => {
  let data = await Branch.findAll({ include: Item });
  return data;
};

export const getBranchById = async (id) => {
  const data = await Branch.findByPk(id, { include: Item });
  return data;
};

export const getBranchBySearch = async () => {
  let data = await Branch.findAll({ include: Item });
  return data;
};

export const createBranch = async (body) => {
  if(body.menu_url && body.menu_url !== ""){
    body.menu_qr = await convertToQr(body.menu_url)
  } else {
    body.menu_qr = null
  }
  let data = await Branch.create(body);
  return data;
};

export const updateBranch = async (id, body) => {
  if(body.menu_url && body.menu_url !== ""){
    body.menu_qr = await convertToQr(body.menu_url)
  } else {
    body.menu_qr = null
  }
  let data = await Branch.update(body, {
    where: {
      id: id,
    },
  });
  console.log(data);
  return data;
};

export const deleteBranch = async (id) => {
  let data = await Branch.destroy({
    where: {
      id: id,
    },
  });
  return data;
};

export const addItem = async (branch_id, item_id, body) => {
  let branch = await Branch.findByPk(branch_id);
  let item = await Item.findByPk(item_id);
  item.BranchItem = body;
  let data = await branch.addItem(item);
  return data;
};

export const updateItem = async (branch_id, item_id, body) => {
  let data = await BranchItem.update(body, {
    where: {
      BranchId: branch_id,
      ItemId: item_id,
    },
  });
  return data;
};

export const deleteItem = async (branch_id, item_id) => {
  let data = await BranchItem.destroy({
    where: {
      BranchId: branch_id,
      ItemId: item_id, 
    },
  });
  return data;
};