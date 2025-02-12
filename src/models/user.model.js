import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";

const modelName = "User";

const User = sequelize.define(modelName, {
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("admin", "user"),
    allowNull: false,
    defaultvalue: "user",
  },
});

await User.sync({
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

export default User;
