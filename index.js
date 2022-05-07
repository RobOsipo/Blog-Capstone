const express = require('express');
require('dotenv').config();
const cors = require('cors')
const enableCors = require('./enableCors.js')
const app = express();
const bodyParser = require("body-parser");
const AuthRouter = require('./routers/Auth.js');
const BlogRouter = require('./routers/blogPost.js');

app.use(cors())
app.use(enableCors)
app.use(express.json());
app.use(bodyParser.json())

app.use('/', AuthRouter)
app.use('/', BlogRouter);


app.get('/', (req, res) => {
    res.send('Welcome to Small -- Think big, blog Small');
})


app.listen(4000, () => {
    console.log('The server is listening on port 4000')
})


