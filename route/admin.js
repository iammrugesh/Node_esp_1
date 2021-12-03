var express = require('express');
var admin = express.Router();
var path = require('path');
admin.get('/add_product', function (req, res) {
    res.sendFile(path.join(__dirname, '..','views', 'add_product.html'));
});

module.exports = admin;