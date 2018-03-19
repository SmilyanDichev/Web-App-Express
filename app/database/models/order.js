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

    User.hasMany(Order, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: 'CASCADE',
    });

    orderStatus.hasMany(Order, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: 'CASCADE',
    });

    Order.belongsTo(orderStatus);

    Order.belongsTo(User);
  };
  return Order;
};
