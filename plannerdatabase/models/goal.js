const Sequelize = require('sequelize');
const config = require('./../config');

const Goal= config.define('goal', {
    id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true
    },
    description :{
        type:Sequelize.STRING,
        allowNull:true
    },

    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
   
    date_of_start:{
        type:Sequelize.DATE,
        allowNull:false
    },
    date_of_end:{
        type:Sequelize.DATE,
        allowNull:true
    },
    status:{
        type:Sequelize.STRING,
        allowNull:true
    },
},{timestamps:false});

module.exports=Goal;