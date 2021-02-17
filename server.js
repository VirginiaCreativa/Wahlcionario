const express = require("express");

const app = express();
const path = require("path");
const cors = require("cors");
const logger = require("morgan");
const chalk = require("chalk");
const bodyParser = require("body-parser");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cors({ origin: true, credentials: true }));
// app.options(cors());

app.use(express.static(path.join(__dirname, "../client/public")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "public", "index.html"));
});

app.get("/", (req, res) => {
  res.send("Hello Word");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(
    chalk.hex("#fff").bgBlue.bold(`listening http://localhost:${PORT}`)
  );
});
