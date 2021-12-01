var express = require('express');
var router = express.Router();
var path = require('path');

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'login.html'));
});

router.post('/', function (req, res) {
  console.log(req.body.name);
  console.log(req.body.password);
  res.redirect('/');
});

router.use((req, res) => {
  console.log('Error');
  res.sendFile(path.join(__dirname, '../views', 'error.html'));
});
module.exports = router;