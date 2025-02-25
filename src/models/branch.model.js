import sequilize from "../../config/database.js";
import { DataTypes } from "sequelize";

const modelName = "Branch";

const Branch = sequilize.define(modelName, {
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  opening_hours: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  contact_details: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  menu_url: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  menu_qr: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

await Branch.sync({
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

export default Branch;
