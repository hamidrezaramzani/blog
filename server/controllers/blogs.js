const db = require('../db')
const moment = require('moment')
const newBlog = (req, res) => {
    let { title, content, description } = req.body;

    const directoryPath = __dirname + "\\..\\public\\images\\";
    const fileName = (Math.ceil(Math.random() * 1000)) + req.files.image.name;
    req.files.image.mv(directoryPath + fileName, function (err) {
        if (err)
            return res.status(500).send(err);

        db.query("INSERT INTO blogs (title , content , image , time , description) VALUES (?,?,?,? , ?)", [title, content, fileName, moment().unix(), description], (err) => {
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


const deleteItem = (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM blogs  WHERE id=?", [id], (err) => {
        if (err)
            res.status(400).send(err)

        res.status(200).send({
            message: "blog item deleted",
            id
        })
    });
}



const getBlogItem = (req, res) => {
    const { id } = req.params;
    console.log(id);
    db.query("SELECT * FROM blogs WHERE id=?", [id], (err, results) => {
        if (err)
            res.status(400).send(err)

        res.status(200).send(results[0])
    });
}

module.exports = { newBlog, allBlogs, deleteItem, getBlogItem }