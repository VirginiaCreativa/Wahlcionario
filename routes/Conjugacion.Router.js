const express = require("express");
const ConjugacionController = require("../controllers/Conjugacion.Controller");

function ConjugacionRouter(app) {
  const router = express.Router();

  app.use("/conjugacion", router);
  router.get("/:palabra", (req, res) => {
    ConjugacionController.fetchSetConjugacion(req, res).then((res) =>
      console.log(res)
    );
  });
}

module.exports = ConjugacionRouter;
