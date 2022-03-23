const express = require('express');
require('dotenv').config();
const app = express();
const connection = require('./connection.js');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const checkJwt = require('./checkJWT.js')

app.use(express.json());

// * GET/POST Routes for home page and signup / Authorization
// TODO: CLEAN THIS PAGE UP, BREAK INTO CONTROLLERS

app.get('/', (req, res) => {
    res.send('Welcome to Small -- Think big, blog Small');
})



app.get('/signup', (req, res) => {
    res.send('please register with email & password here')
})

app.post('/signup', async (req, res) => {

    const sql = 'INSERT INTO login_credentials (user_email, user_password) VALUES (?,?)'
    const {email, password } = req.body

    let hash = await argon2.hash(password)

    connection.query(sql, [email, hash], (err, rows) => {
        if (err) {
            console.log(err)
            res.status(404).send('A problem occured' + err.sqlMessage)
        } else {
            res.json(rows)
        }
    })
}) 



app.get('/login', (req, res) => {
    res.send('Please log in using your registered credentials')
})

app.post('/login', (req, res) => {
    const {email, password } = req.body
    const sql = 'SELECT * FROM login_credentials WHERE user_email = ?'


    connection.query(sql, [email] , async (err, rows) => {
    
        if (err) {
            console.log(err)
            res.status(404).send('A problem occured' + err.sqlMessage)
        }

        if (!rows[0]) {return res.status(400).send('incorrect credentials')}
        
        
        else {

            let hash = rows[0].password
            let match = await argon2.verify(hash, password)
            if (!match) { return res.status(400).send('incorrect credentials')}
            else {
                let token = jwt.sign({id: rows[0].id}, process.env.SECRET, {expiresIn: process.env.JWT_EXPIRES})
                res.json({token})

            }
            
          }  
        
    })
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


