const axios = require("axios");

async function setConjugacion(req, res) {
  const { palabra } = req.params;
  const result = await palabra;
  // console.log(result);
  return result;
}

module.exports = setConjugacion;
