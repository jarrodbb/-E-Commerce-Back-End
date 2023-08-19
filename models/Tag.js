// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");

// import our database connection from config.js
const sequelize = require("../config/connection.js");

class Tag extends Model {}

// set up fields and rules for Tag model
// Includes id and tag_name
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

// Export
module.exports = Tag;
