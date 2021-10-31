const db = require('../db')


const join = (req, res) => {
    const { fullname, email } = req.body
    db.query("SELECT * FROM subscribes WHERE email=?", [email], (err1, results) => {
        if (err1)
            res.status(500).json(err1)

        if (!results.length) {
            db.query("INSERT INTO subscribes (email , fullname) VALUES (?,?)", [email, fullname], (err2) => {
                if (err2)
                    res.status(500).json(err2)

                res.status(200).json({ message: "subscribed" })
            })
        } else {
            res.status(400).json({
                message: "this is email already registered"
            })
        }


    });
}

module.exports = { join }