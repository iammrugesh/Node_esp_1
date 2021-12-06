const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const route = require('./route/route.js');
const admin = require('./route/admin.js');
const users = require('./route/users.js');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);
app.use('/admin', admin);
app.use('/', users);

app.use((req, res) => {
  // res.sendFile(path.join(__dirname,'views','error.html'));
  const pageTital = 'Error';
  res.render('error',{
    pageTital:pageTital
  });
});

app.listen(port, () => {
  console.log(`port : ${port}`);
});