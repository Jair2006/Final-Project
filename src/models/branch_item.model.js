import sequilize from "../../config/database.js";
import { DataTypes } from "sequelize";
import Branch from "./branch.model.js";
import Item from "./item.model.js";

const modelName = "BranchItem";

const BranchItem = sequilize.define(modelName, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  shipping_enabled: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  delivery_enabled: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  stock_alert_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  stock_alert_eneable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  selfserve_ordering_enabled: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  enabled: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  pickup_enabled: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Branch.belongsToMany(Item, {
  through: BranchItem,
});

Item.belongsToMany(Branch, {
  through: BranchItem,
});

await BranchItem.sync({
  force: false,
  alter: {
    drop: false,
  },
})
  .then(() => {
    console.log(`Modelo ${modelName} creado con éxito`);
  })
  .catch((err) => {
    console.log(`Error al crear el modelo ${modelName}:\n ${err.message}`);
  });

export default BranchItem;
