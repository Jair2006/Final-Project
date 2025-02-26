import Sequilize from "../../config/database.js";
import { DataTypes} from "sequelize";

const modelName = "Item";

const Item = Sequilize.define(modelName, {
    
    image_url: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    reference_handle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    item_name: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    variation_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    sku : {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    reporting_category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    seo_title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    seo_descrption: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    permalink: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    gtin: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    square_online_item_visibility: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    item_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    weight: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    social_media_link_title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    social_media_link_descrption: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    online_sale_price: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    sellable: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    stockable: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    skip_detail_in_pos: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    option_name_1: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    option_value_1: {
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