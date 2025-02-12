import {Sequelize} from 'sequelize';

const host = 'localhost';

const sequilize = new Sequelize(
    'el_sabor_ambateno',
    'postgres',
    '',
    {
        host: host,
        dialect: 'postgres',
    }

);

export default sequilize;