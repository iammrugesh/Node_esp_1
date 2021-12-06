const express = require('express');
const router = express.Router();
const path = require('path');

router.post('/product_list', function (req, res) {
  const pageTital = 'Product List';
  const productArray = [];
  productArray.push(req.body.product);
  console.log(req.body);
  console.log(productArray);
  res.render('product_list',{
    pageTital:pageTital,
    productArray:productArray
  });
});

// router.get('/product_list', function (req, res){
//   // res.sendFile(path.join(__dirname, '..','views', 'product_list.html'));
//   res.render('product_list',{
    
//   });
// });
module.exports = router;