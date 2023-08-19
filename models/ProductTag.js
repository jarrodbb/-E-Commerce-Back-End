const { Model, DataTypes } = require("sequelize");

// import our database connection from config.js
const sequelize = require("../config/connection");

class ProductTag extends Model {}

// set up fields and rules for ProductTag model
// Includes id, product_id and tag_id
ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "id",
        unique: false,
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tag",
        key: "id",
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

// Export
module.exports = ProductTag;
