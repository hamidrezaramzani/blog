const db = require('../db')
const newBlog = async (req, res) => {
    let { title, content } = req.body;

    const directoryPath = __dirname + "\\..\\uploads\\";
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

module.exports = { newBlog }