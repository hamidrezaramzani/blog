const express = require("express")
const path = require('path')
const bodyParser = require('body-parser')
const usersRouter = require('./routes/users')
const blogsRouter = require('./routes/blogs')
const fileUpload = require('express-fileupload');
const app = express();
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", process.env.origin || "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Headers", "*")
    next();
});


app.use(fileUpload());

app.use('/public', express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use("/api/user", usersRouter)
app.use("/api/blog", blogsRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
})