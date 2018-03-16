'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
  }, {});
  Order.associate = (models) => {
    // associations can be defined here
    const {
      User,
      orderStatus,
    } = models;

    Order.belongsTo(User, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: 'CASCADE',
    });

    Order.belongsTo(orderStatus, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: 'CASCADE',
    });
  };
  return Order;
};
