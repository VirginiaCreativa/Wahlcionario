const express = require("express");
const ConjugacionController = require("../services/Conjugacion.Server");

function ConjugacionRouter(app) {
  const router = express.Router();
  app.use("/conjugacion", router);

  router.get("/:search", (req, res) => {
    ConjugacionController(req, res);
  });
}

module.exports = ConjugacionRouter;
