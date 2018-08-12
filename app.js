const MW = require("morgan")
const express = require("express");
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
    .get("/hihi/:text", (req, res) => {
        const param = req.params;
        res.send(`${param.text}`);
    })
    .get("/hello", (req, res) => {
        res.send("hello world!")
    });

module.exports = app;
