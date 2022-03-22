const express = require('express');
require('dotenv').config();
const app = express();
const connection = require('./connection.js');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const checkJwt = require('./checkJWT.js')

app.use(express.json());


app.get('/', (req, res) => {
    res.send('welcome to Small the blog');
})



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




app.listen(4000, () => {
    console.log('The server is listening on port 4000')
})


