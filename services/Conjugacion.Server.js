const axios = require("axios");

async function setConjugacion(req, res) {
  try {
    const response = await axios
      .get(
        `https://raw.githubusercontent.com/asosab/esp_verbos/master/esp_verbos.json`
      )
      .then((response) => {
        // res.status(200).send({ conjugacion: response });
        const result = response.data
          .filter((item) => item.verbo === req.params.search)
          .map((item) => item);
        res.status(200).send({
          conjugacion: result,
        });
      });
    return response;
  } catch (error) {
    console.log(error);
  }
}

module.exports = setConjugacion;
