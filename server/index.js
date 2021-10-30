const express = require("express")
const bodyParser = require('body-parser')
const usersRouter = require('./routes/users')
const app = express();
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", process.env.origin || "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Headers", "*")
    next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use("/api/user", usersRouter)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
})