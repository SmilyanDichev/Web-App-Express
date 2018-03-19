'use strict';
module.exports = (sequelize, DataTypes) => {
  const orderStatus = sequelize.define('orderStatus', {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {});
  orderStatus.associate = (models) => {
    // associations can be defined here
  };
  return orderStatus;
};
