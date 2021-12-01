var express = require('express');
var router = express.Router();

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function (req, res) {
  res.sendFile('./login.html', {root: __dirname })
//   res.send('login here');
});

router.post('/', function (req, res) {
  // res.render('the_template', { name: req.body.name });
  console.log(req.body.name);
  console.log(req.body.password);
  res.redirect('/');
});

module.exports = router;