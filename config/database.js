import {Sequilize} from 'sequelize';

host = 'localhost';

const sequilize = new Sequilize(
    'el_sabor_ambateno',
    'postgres',
    '',
    {
        host: host,
        dialect: 'postgres',
    }

);

export default sequilize;