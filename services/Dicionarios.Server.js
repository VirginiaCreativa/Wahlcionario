const axios = require("axios");
const keys = require("../keys/keys");

async function setPalabra(req, res) {
  let result = await axios
    .all([
      axios.get(
        `https://od-api.oxforddictionaries.com/api/v2/entries/es/${req.params.search}?strictMatch=false`,
        {
          headers: {
            Accept: "application/json",
            app_id: keys.oxfordAppId,
            app_key: keys.oxfordAppKeys,
          },
        }
      ),
      axios.get(
        ` http://sesat.fdi.ucm.es:8080/servicios/rest/sinonimos/json/${req.params.search}`
      ),
      axios.get(
        ` http://sesat.fdi.ucm.es:8080/servicios/rest/antonimos/json/${req.params.search}`
      ),
    ])
    .then(
      axios.spread((response1, response2, response3) => {
        res.status(200).send({
          definiciones: response1.data,
          sinonimos: response2.data,
          antonimos: response3.data,
        });
      })
    )
    .catch((err) => {
      res.send({
        message:
          "No se encontró ninguna entrada que coincida con palabra proporcionados",
      });
    });

  return result || {};
}

module.exports = { setPalabra };
