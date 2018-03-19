'use strict';
module.exports = (sequelize, DataTypes) => {
  const Promotion = sequelize.define('Promotion', {
    type: {
      /* eslint-disable */
      type: DataTypes.FLOAT(4, 1),
      /* eslint-enable */
      allowNull: false,
      unique: true,
    },
  }, {});
  Promotion.associate = (models) => {
    // associations can be defined here
  };
  return Promotion;
};
