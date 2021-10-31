const db = require('../db')
const jwt = require('jsonwebtoken')
const login = async (req, res) => {
    const { username, password } = req.body
    db.query("SELECT * FROM users WHERE username=? AND password=?", [username, password], (_, results) => {
        if (results.length) {
            console.log("test");
            const token = jwt.sign({ user: "admin" } , "BLOG-KEY");
            res.status(200).json({
                token
            })
        } else {
            res.status(400).json({
                message: "username or password is invalid"
            })
        }
    });
}


module.exports = { login  }