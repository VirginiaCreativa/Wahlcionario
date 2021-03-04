const express = require("express");
const DefinicionController = require("../controllers/Definicion.Controller");

function DefinicionRouter(app) {
  const router = express.Router();
  app.use("/palabra", router);

  router.get("/:search", (req, res) => {
    DefinicionController.fetchPalabraDefinicion(req, res);
  });
}

module.exports = DefinicionRouter;
