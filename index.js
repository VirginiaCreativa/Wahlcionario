const express = require("express");

const app = express();
const path = require("path");
const cors = require("cors");
const logger = require("morgan");
const chalk = require("chalk");
const bodyParser = require("body-parser");

const keys = require("./keys/keys");
const MongooseLib = require("./lib/mongoose");
const UserRouter = require("./routes/User.Router");

// ====== CONNECT MONGODB ====== //
const connect = new MongooseLib();
connect.connect();

// ====== MIDDLEWARE ====== //
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.options("*", cors());
app.use(express.static(path.join(__dirname, "client")));
// ====== CLIENT ====== //

// ====== CONTROLLERS ROUTES ====== //
UserRouter(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const port = keys.port || 3000;

app.listen(port, () => {
  console.log(
    chalk.hex("#fff").bgBlue.bold(`listening http://localhost:${port}`)
  );
});
