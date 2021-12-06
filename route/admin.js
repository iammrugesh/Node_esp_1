const express = require('express');
const admin = express.Router();
const path = require('path');

admin.get('/add_product', function (req, res) {
    // res.sendFile(path.join(__dirname, '..','views', 'add_product.html'));
    const pageTital = 'Add Product';
    res.render('add_product',{
        pageTital:pageTital
    });
});

module.exports = admin;