const express = require("express");
const MW = require("morgan")
const app = express();

app.use(MW("common"))
app
    .get("/hihi", (req, res) => {
        const query = req.query;
        if (query && query.abc) {
            res.send(`abc=${query.abc}`);
        } else {
            res.send("intro");
        }
    })
    .get("/hello", (req, res) => {
        res.send("hello world!")
    })


app.listen(8080, () => {
    console.log("Server Starts 8080");
});
