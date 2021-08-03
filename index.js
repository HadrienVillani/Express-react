const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
//Routing
app.use('/api/users/register', require('./routes/api/users/register'));
app.use('/api/users/login', require('./routes/api/users/login'));
app.use('/api/users/update', require('./routes/api/users/update'));
app.use('/api/users/list', require('./routes/api/users'));

const port = process.env.PORT || 5000;

app.listen(port);
console.log(`server started on port : ${port}`);
