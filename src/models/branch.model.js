import sequilize from "../../config/database.js";
import { DataTypes } from "sequelize";

const modelName = "Branch";

const Branch = sequilize.define(modelName, {
  opening_hours: {
    type: DataTypes.STRING(50),
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
  menu_URL: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  stock_alert_eneable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  stock_alert_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
