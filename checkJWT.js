const jwt = require('jsonwebtoken');
require('dotenv').config();

const checkJwt = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send('you are not authorized')
    } else {
        let bearer = req.headers.authorization.split(' ')
        let token = bearer[1]
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {return res.status(401).send('you are not authorized')}
            else {
                console.log(decoded)
                req.user_id = decoded.id
                next()
            }
        })

    }
}

module.exports = checkJwt;