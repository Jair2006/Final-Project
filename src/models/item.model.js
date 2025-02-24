import Sequilize from "../../config/database.js";
import { DataTypes} from "sequelize";

const modelName = "Item";

const Item = Sequilize.define(modelName, {
    
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    image_Url: {
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
        allowNull: false,
    },
    reporting_category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    square_online_item_visibility: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    item_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    weight: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    shipping_enabled: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    self_server_ordering_enabled: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    delivery_enabled: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pickup_enabled: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    online_sale_price: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    archived: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    skip_detail_in_pos: {
        type: DataTypes.TEXT,
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
    social_media_link_title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    social_media_link_descrption: {
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