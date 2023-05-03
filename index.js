const express = require("express");
const app = express();
const cors = require("cors");
const {AWCs, activity, scrap} = require("./scrapper");
const sse = require('sse');

const hostname = "127.0.0.1";
const port = 5000;
let date = "";

app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
    res.send("Good Job API is working");
});

app.get("/AWCs", (_,res) => {
    res.send(AWCs);
});

app.get("/activity", (_,res) => {
    res.send(activity);
});

app.post('/scrap', (req, res) => {
    const stream = new sse(req, res);
    const date = req.body._date;
    const start = req.body.AWCStart;
    const entriesToBeDone = req.body.AWCEnd - req.body.AWCStart + 1;
    scrap(stream, date, start, entriesToBeDone);
  });

app.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`)
});