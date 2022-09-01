const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('videogame', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey:true,
 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description:{
      type:DataTypes.TEXT,
      allowNull:false
    },
    released:{
      type:DataTypes.DATEONLY, 
      defaultValue: "2022-01-17"
    },
    rating:{
      type:DataTypes.DECIMAL
    },
    image:{
      type:DataTypes.TEXT
    },
    createInDb:{
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true,
    }
    
  });
};
