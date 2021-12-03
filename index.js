const express = require('express');
const app = express();
const port = 3000;
var path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// route define
const route = require('./route/route.js');
const admin = require('./route/admin.js');
const users = require('./route/users.js');

app.use('/', route);
app.use('/admin', admin);
app.use('/', users);

app.use((req, res) => {
  console.log('Error');
  res.sendFile(path.join(__dirname,'views','error.html'));
});
app.listen(port, () => {
  console.log(`port : ${port}`);
});