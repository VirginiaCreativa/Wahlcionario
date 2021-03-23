const axios = require("axios");
const sstk = require("shutterstock-api");
const keys = require("../keys/keys");

async function setPalabra(req, res) {
  const auth = {
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI3MTg4NzQiLCJ1aXAiOiIxNzIuMTkuMC45IiwiZXhwIjoxNjE2MTg5NTU5LCJ1bmFtZSI6InVzZXI3MTg4NzQiLCJycG0iOjI0MDAsInByZW1pdW0iOmZhbHNlLCJhcGlrZXkiOiJiY2M3NDE4N2E0NzdiYzQ0NjI3NTNiOGMxNTE0NjQ2OTk1OGE5NWZiIiwic2NvcGUiOlsib3duZWQucmVhZCJdLCJkbGltaXQiOjQwMCwiYXBpZGxpbWl0Ijp0cnVlfQ.iiBw0OJL0gJ8DdLFD2260dhbeDzdaGSOCHJzCxpD4xc",
    expires: 1616189559,
  };
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
        `http://sesat.fdi.ucm.es:8080/servicios/rest/sinonimos/json/${req.params.search}`
      ),
      axios.get(
        `http://sesat.fdi.ucm.es:8080/servicios/rest/antonimos/json/${req.params.search}`
      ),
      axios.get(
        `http://sesat.fdi.ucm.es:8080/servicios/rest/pictograma/palabra/${req.params.search}`
      ),
      axios.get(
        `https://pixabay.com/api/?key=${keys.pixabayKey}&q=${req.params.search}&lang=es&pretty=true`
      ),
    ])
    .then(
      axios.spread((response1, response2, response3, response4, response5) => {
        res.status(200).send({
          definiciones: response1.data,
          sinonimos: response2.data,
          antonimos: response3.data,
          pictograma: response4.data,
          pixabay: response5.data,
        });
      })
    )
    .catch((err) => {
      console.log(err);
      res.send({
        message:
          "No se encontró ninguna entrada que coincida con palabra proporcionados",
      });
    });

  return result || {};
}

async function setImages(req, res) {
  sstk.setBasicAuth(keys.shuttImagesId, keys.shuttImagesSecret);
  const imagesApi = new sstk.ImagesApi();

  const queryParams = {
    query: req.params.images,
    image_type: "photo",
    page: 1,
    per_page: 20,
    sort: "popular",
    orientation: "horizontal",
    language: "es",
  };

  await imagesApi
    .searchImages(queryParams)
    .then((images) => {
      res.status(200).send({
        images: images.data,
      });
    })
    .catch((error) => {
      res.send({
        message: error,
      });
    });
  return imagesApi;
}

module.exports = { setPalabra, setImages };
