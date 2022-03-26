const connection = require('../connection.js');




const getAllBlogs = (req, res) => {

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
}

const composeBlogPost = (req, res) => {

    const sql = 'INSERT INTO blog_info ( post_title, post_body, user_id ) VALUES (?, ?, ?)'

    const { post_title, post_body } = req.body;
    const user_id = req.user_id

    connection.query(sql, [post_title, post_body, user_id], (err, rows) => {
        if (err) {
            console.log(err)
            res.status(404).send('A problem occured' + err.sqlMessage)
        } else {
            res.json(rows)
        }
    })
}

const getAllPostTitle = (req, res) => {

    const sql = 'SELECT * FROM post_title'
    connection.query(sql, (err, rows) => {
        if (err) {
            console.log(err)
            res.status(404).send('A problem occured' + err.sqlMessage)
        } else {
            res.json(rows)
        }
    })
}

const getBlogByPostId = (req, res) => {
    const sql = 'SELECT * FROM blog_info WHERE post_id = ?'
    connection.query(sql, [req.params.id], (err, rows) => {
        if (err) {
            console.log(err)
            res.status(404).send('A problem occured' + err.sqlMessage)
        } else {
            res.json(rows)
        }
    })
}


module.exports = { getAllBlogs, getAllPostTitle, getBlogByPostId, composeBlogPost  }