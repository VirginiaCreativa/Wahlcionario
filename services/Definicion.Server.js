const axios = require("axios");
const keys = require("../keys/keys");

async function setPalabra(req, res) {
  let result = await axios
    .get(
      `https://od-api.oxforddictionaries.com/api/v2/entries/es/${req.params.search}?strictMatch=false`,
      {
        headers: {
          Accept: "application/json",
          app_id: keys.oxfordAppId,
          app_key: keys.oxfordAppKeys,
        },
      }
    )
    .then((response) => {
      res.status(200).send({ data: response.data });
    })
    .catch((err) => {
      res.send({
        message:
          "No se encontró ninguna entrada que coincida con palabra proporcionados",
      });
    });

  return result || {};
}

module.exports = { setPalabra };
