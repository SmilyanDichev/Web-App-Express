const init = async (data) => {
    let defaultButtons = await data.category.getAll();
    const productsRoute = 'products?category=';

    defaultButtons = defaultButtons.map((cat) => {
        return {
            href: productsRoute + cat.name,
            text: cat.name,
        };
    });

    const adminButtons = [{
            href: '/admin/orders',
            text: 'Orders',
        },
        {
            href: '/admin/users',
            text: 'Users',
        },
        {
            href: '/admin/products',
            text: 'Products',
        },
        {
            href: '/admin/categories',
            text: 'Categories',
        },
    ];

    return {
        defaultButtons,
        adminButtons,
    };
};

module.exports = {
    init,
};
