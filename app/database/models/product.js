'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
      /* eslint-disable */
      type: DataTypes.FLOAT(10, 2),
      /* eslint-enable */
      allowNull: false,
    },
    pictureUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  Product.associate = (models) => {
    // associations can be defined here
    const {
      Category,
      Promotion,
      Order,
      ordersProduct,
    } = models;

    Product.belongsToMany(Order, {
      through: ordersProduct,
    });

    Order.belongsToMany(Product, {
      through: ordersProduct,
    });

    Category.hasMany(Product, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: 'CASCADE',
    });

    Promotion.hasMany(Product, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: 'CASCADE',
    });

  Product.belongsTo(Category, {
    foreignKey: {
      allowNull: false,
    },
    onDelete: 'CASCADE',
  });

  Product.belongsTo(Promotion, {
    foreignKey: {
      allowNull: false,
    },
    onDelete: 'CASCADE',
  });
};

return Product;
};
