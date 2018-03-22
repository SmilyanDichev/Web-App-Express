const {
    User,
    Order,
    orderStatus,
    Product,
    Category,
    Promotion,
} = require('./models');

const run = async () => {
    const allOrders = await Order.findAll({
        include: [Product, User, orderStatus],
    });
    const allProducts = await Product.findAll({
        include: [Order, Category, Promotion],
    });

    const allUsers = await User.findAll({
        include: [Order],
    });

    const productCategory = await Category.findAll({
        include: [Product],
    });

    const productPromotion = await Promotion.findAll({
        include: [Product],
    });
    // const category1 = await Category.findById(1);
    // category1.getProducts();
    // console.log(category1);

    console.log('=================================');

    console.log('allOrders', allOrders);
    console.log('allProducts', allProducts);
    console.log('allUsers', allUsers);
    console.log('productCategory', productCategory);
    console.log('productPromotion', productPromotion);
};

run();
