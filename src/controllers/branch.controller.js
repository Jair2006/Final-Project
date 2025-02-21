import Branch from "../models/branch.model.js";

export const getBranchs = async () => {
  let data = await Branch.findAll();
  return data;
};

export const getBranchById = async (id) => {
  const data = await Branch.findByPk(id);
  return data;
};

export const getBranchBySearch = async () => {
  let data = await Branch.findAll();
  return data;
};

export const createBranch = async (body) => {
  let data = await Branch.create(body);
  return data;
};

export const updateBranch = async (id, body) => {
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
