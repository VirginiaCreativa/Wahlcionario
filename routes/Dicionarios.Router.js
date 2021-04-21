const express = require("express");
const DicionariosController = require("../controllers/Dicionarios.Controller");

async function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

async function DicionariosRouter(app) {
  const router = express.Router();
  app.use("/palabra", router);

  router.get("/:search", async (req, res) => {
    await DicionariosController.fetchDicionariosDefinicion(req, res);
  });
  router.get("/images/:images", async (req, res) => {
    await DicionariosController.fetchDicionariosImages(req, res);
  });
}

module.exports = DicionariosRouter;
