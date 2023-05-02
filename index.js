const express = require("express");
const app = express();
const hostname = "127.0.0.1";
const port = 2000;

app.get("/", (_, res) => {
    res.send("Good Job API is working");
});

app.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`)
})