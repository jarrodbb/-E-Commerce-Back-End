const { Model, DataTypes } = require("sequelize");

//Import sequelize connection
const sequelize = require("../config/connection.js");

class Category extends Model {}

// Set up fields and rules for Category
// Includes id and category_name
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
