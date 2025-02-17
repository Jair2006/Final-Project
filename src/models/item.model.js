import sequilize from "../../config/database";
import { DataTypes, STRING } from "sequelize";

const modelName = "Item";

const Item = Sequelize.define(modelName, {
    name: {
        type: DataTypes-STRING,
        allowNull: false,
    },
    Descripcion: {
        type: DataTypes.TEXT
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

await Item.sync({
    force: false,
    alter: {
        drop: false
    }
}).then(() => {
    console.log(`Modelo Item ha sido creado correctamente.`);
}).catch((err) => {
    console.error(`Error en la creacion del modelo Item ${modelName}:\n`, err);
}); 

export default Item 
