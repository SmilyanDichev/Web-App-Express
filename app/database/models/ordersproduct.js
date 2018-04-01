'use strict';
module.exports = (sequelize, DataTypes) => {
  const ordersProduct = sequelize.define('ordersProduct', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  ordersProduct.associate = (models) => {
    // associations can be defined here
  };
  return ordersProduct;
};
