const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const { all } = require('../routes/api/tag-routes.js');

class Category extends Model {}

Category.init(
  {
   Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
   } 
  },
  {
  Category_names: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
