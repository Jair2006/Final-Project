import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";
import Branch from "./branch.model.js";

const modelName = "Contact";

const Contact = sequelize.define(modelName, {
  data: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM("phone", "email"),
    allowNull: false,
  },
});

Branch.hasMany(Contact);

await Contact.sync({
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

export default Contact;
