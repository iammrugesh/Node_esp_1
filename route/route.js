var express = require('express');
var router = express.Router();
var path = require('path');

// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now());
//   next();
// });

router.post('/product_list', function (req, res) {
  console.log(req.body.product);
  res.redirect('/product_list');
});

router.get('/product_list', function (req, res){
  console.log('product page');
  res.sendFile(path.join(__dirname, '..','views', 'product_list.html'));
});
module.exports = router;