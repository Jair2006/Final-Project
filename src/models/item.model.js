import Sequilize from "../../config/database.js";
import { DataTypes} from "sequelize";

const modelName = "Item";



const Item = Sequilize.define(modelName, {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Descripcion: {
        type: DataTypes.TEXT,
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
    console.error(`Error en la creacion del modelo ${modelName}:\n`, err);
}); 

export default Item;
