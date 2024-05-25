const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  return res.send(`${req.body.username} Response Submitted`).status(200);
});

app.listen(PORT, () => {
  console.log("server started at 3000 port");
});
