const Product = require('../models/product');

module.exports = {
    getRandomProduct: (req, res) => {
        const product = Product.getRandomProduct();
        res.render('product', {product});
    },

    addToCart: (req, res) => {
        const {id} = req.body;
        const {cart} = req.session;
        const order = cart.find(ord => ord.product.id === parseInt(id));
        if (order) { // existing product in cart
            order.qty += 1;
            order.price += order.product.price;
        } else { // add new product into cart
            const product = Product.getProductById(parseInt(id));
            cart.push({
                product: product,
                price: product.price,
                qty: 1
            });
        }
        res.redirect(303, '/cart');
    },

    getCart: (req, res) => {
        const {cart} = req.session;
        const totalPrice = cart.map(order => order.price).reduce((a, b) => a + b, 0);
        res.render('shoppingCart', {cart, totalPrice: totalPrice.toFixed(2)});
    },

    getProductById: (req, res) => {
        const product = Product.getProductById(req.params.id);
        if (!product) {
            res.render('404');
        }
        res.render('product', {product});
    }
};
