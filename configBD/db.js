import { Sequelize } from "sequelize";

const conectarBD = new Sequelize('citas_app','xxxx','xxxx@',{
    host: 'xxxx',
    dialect: 'mysql'
})

export default conectarBD