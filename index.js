const express = require('express');
require('dotenv').config();
const app = express();
// const connection = require('./connection.js');
// const argon2 = require('argon2');
// const jwt = require('jsonwebtoken');
// const checkJwt = require('./checkjwt.js')



app.get('/', (req, res) => {
    res.send('welcome to Small the blog');
})



app.listen(4000, () => {
    console.log('The server is listening on port 4000')
})


