const axios = require("axios");

async function setPalabra(req, res) {
  const api = "https://api.dictionaryapi.dev/api/v1/entries/es";
  let result = await axios
    .get(`${api}/${req.params.search}`)
    .then((response) => console.log(response.data))
    .catch((err) => res.status(400).send({ message: err }));

  return result || {};
}

module.exports = { setPalabra };
