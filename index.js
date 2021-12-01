const express = require('express');
const app = express();
const port = 3000;

// app.use(express.bodyParser());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// route define
const route = require('./route/route.js');
const admin = require('./route/admin.js');
const users = require('./route/users.js');

app.use('/', route);
app.use('/admin', route);
app.use('/users', route);

app.listen(port, () => {
  console.log(`port : ${port}`);
});