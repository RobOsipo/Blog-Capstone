const express = require('express');
require('dotenv').config();
const app = express();
const connection = require('./connection.js');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const checkJwt = require('./checkJWT.js')
const bodyParser = require("body-parser");
const AuthRouter = require('./routers/Auth.js');

app.use(express.json());
app.use(bodyParser.json())
app.use('/auth', AuthRouter)



// * GET/POST Routes for home page and signup / Authorization


app.get('/', (req, res) => {
    res.send('Welcome to Small -- Think big, blog Small');
})



app.get('/signup', (req, res) => {
    res.send('please register with email & password here')
})




app.get('/login', (req, res) => {
    res.send('Please log in using your registered credentials')
})



// ! Authorization Required for all other GET routes below

app.get('/blog', checkJwt, (req, res) => {
    console.log('inside the blog home page after sign in');

    const sql = 'SELECT * FROM blog_info'
    connection.query(sql, (err, rows) => {
        if (err) {
            console.log(err)
            res.status(404).send('A problem occured' + err.sqlMessage)
        } else {
            res.json(rows)
        }
    })
})




app.get('/posts', checkJwt, (req, res) => {
    const sql = 'SELECT * FROM post_title'
    connection.query(sql, (err, rows) => {
        if (err) {
            console.log(err)
            res.status(404).send('A problem occured' + err.sqlMessage)
        } else {
            res.json(rows)
        }
    })
})



app.get('posts/:id', checkJwt, (req, res) => {
    const sql = 'SELECT * FROM blog_info WHERE post_id = ?'
    connection.query(sql, [req.params.id], (err, rows) => {
        if (err) {
            console.log(err)
            res.status(404).send('A problem occured' + err.sqlMessage)
        } else {
            res.json(rows)
        }
    })
})











app.listen(4000, () => {
    console.log('The server is listening on port 4000')
})


