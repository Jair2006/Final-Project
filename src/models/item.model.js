import Sequilize from "../../config/database.js";
import { DataTypes} from "sequelize";

const modelName = "Item";



const Item = Sequilize.define(modelName, {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Description: {
        type: DataTypes.TEXT,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    itemName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    variationName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    reportingCategory: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    SquareOnlineItemVisibility: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    itemType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    weight: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    shippingEnabled: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    selfServerOrderingEnabled: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    deliveryEnabled: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pickupEnabled: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    onlineSalePrice: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    archived: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    skipDetailInPOS: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    SEOTitle: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    SEODescrption: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    permalink: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    GTIN: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    socialMediaLinkTitle: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    socialMediaLinkDescrption: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    sellable: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    stockable: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    optionNAme1: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    optionValue1: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    CurrentQuantityElSaborAmbatenoIVUC: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    NewQuantytyElSaborAmbatenoIVUC: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    StocklAlertEnabledElSaborAmbatenoIVUS: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    StockAlertCountElSaborAmbatenoIVUC: {
        type: DataTypes.STRING,
        allowNull: true,
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
