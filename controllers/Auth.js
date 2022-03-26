const connection = require('../connection.js');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const signup = async (req, res) => {
   
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
}


const login = async (req, res) => {
    const {email, password } = req.body
    const sql = 'SELECT * FROM login_credentials WHERE user_email = ?'


    connection.query(sql, [email] , async (err, rows) => {
    console.log(rows)
        if (err) { return res.status(404).send('A problem occured' + err.sqlMessage)}

        if (!rows[0]) {return res.status(400).send('incorrect credentials')}
        
        else {

            let hash = rows[0].user_password
            console.log(hash)
            let match = await argon2.verify(hash, password)
            
            if (!match) { return res.status(400).send('incorrect credentials')}
            else {
                let token = jwt.sign({id: rows[0].user_id}, process.env.SECRET, {expiresIn: process.env.JWT_EXPIRES})
                res.json({token})

            }
          }   
    })
}


module.exports = { signup, login }