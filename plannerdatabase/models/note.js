const Sequelize = require('sequelize');
const config = require('./../config');

const Note= config.define('note', {
    id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true
    },

    header:{
        type:Sequelize.STRING,
        allowNull:false
    },
    details :{
        type:Sequelize.STRING,
        allowNull:false
    },
    importance:{
        type:Sequelize.STRING,
        allowNull:true
    }
},{timestamps:false});
module.exports=Note;