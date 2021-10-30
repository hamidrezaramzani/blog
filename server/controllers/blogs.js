const db = require('../db')
const newBlog = (req, res) => {
    let { title, content } = req.body;

    const directoryPath = __dirname + "\\..\\public\\images\\";
    const fileName = (Math.ceil(Math.random() * 1000)) + req.files.image.name;
    req.files.image.mv(directoryPath + fileName, function (err) {
        if (err)
            return res.status(500).send(err);

        db.query("INSERT INTO blogs (title , content , image) VALUES (?,?,?)", [title, content, fileName], (err) => {
            if (err)
                return res.status(500).send(err)
            else
                res.status(200).send({ message: "blog created" })


        })
    });
}

const allBlogs = (req, res) => {
    db.query("SELECT * FROM blogs", (err, results) => {
        if (err)
            res.status(400).send(err)

        res.status(200).send(results)
    });
}

module.exports = { newBlog, allBlogs }