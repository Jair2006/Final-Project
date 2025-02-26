import sequelize from "../../config/database.js";
import { DataTypes} from "sequelize";

const modelName = "Info";

const Info = sequelize.define(modelName, {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    history: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    base_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    menu_url: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    menu_qr: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

await Info.sync({
    force: false,
    alter: {
        drop: false
    }
}).then(() => {
    console.log(`Modelo Info ha sido creado correctamente.`);
}).catch((err) => {
    console.error(`Error en la creacion del modelo ${modelName}:\n`, err);
}); 

export default Info;
