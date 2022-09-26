const Product = require('../models/product');

module.exports = {
    getRandomProduct: (req, res) => {
        const product = Product.getRandomProduct();
        res.render('product', {product});
    },

    addToCart: (req, res) => {
        Product.addToCart(req.body.id);
        res.redirect(303, '/cart');
    },

    getCart: (req, res) => {
        const cart = Product.getCart();
        const totalPrice = cart.map(order => order.product.price * order.qty).reduce((a, b) => a + b, 0);
        res.render('shoppingCart', {cart, totalPrice: totalPrice.toFixed(2)});
    }
};
