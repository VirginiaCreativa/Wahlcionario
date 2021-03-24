const axios = require("axios");
const sstk = require("shutterstock-api");
const keys = require("../keys/keys");
const setTranslate = require("../middlewares/Translate2");

async function setPalabra(req, res) {
  var headersFlaticon = {
    Accept: "application/json",
    Authorization: `Bearer ${keys.flaticonKey}`,
  };

  let palabraTranslate = await setTranslate(req.params.search)
    .then((res) => {
      let text;
      if (
        !res.data.results[0].lexicalEntries[0].entries[0].senses[0]
          .translations[0].text
      ) {
        text =
          res.data.results[0].lexicalEntries[0].entries[0].senses[0]
            .subsenses[0].translations[0].text;
      } else {
        text =
          res.data.results[0].lexicalEntries[0].entries[0].senses[0]
            .translations[0].text;
      }

      //   text = res.data.results[0].lexicalEntries[0].entries[0].senses[0].subsenses[0]
      //     .translations[0].text;
      //  text =
      //   res.data.results[0].lexicalEntries[0].entries[0].senses[0].translations[0].text;
      // const result = text.replace("to", " ").trim();
      // return result;
    })
    .catch((err) => console.log(err));

  let result = await axios
    .all([
      axios.get(
        `https://od-api.oxforddictionaries.com/api/v2/entries/es/${req.params.search}?strictMatch=true`,
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
      axios.get(
        `https://api.flaticon.com/v2/search/icons/added?q=${palabraTranslate}`,
        {
          headers: headersFlaticon,
        }
      ),
    ])
    .then(
      axios.spread(
        (response1, response2, response3, response4, response5, response6) => {
          res.status(200).send({
            definiciones: response1.data,
            sinonimos: response2.data,
            antonimos: response3.data,
            pictograma: response4.data,
            pixabay: response5.data,
            flaticon: response6.data,
          });
        }
      )
    )
    .catch((err) => {
      console.log(err);
      res.send({
        message:
          "No se encontró ninguna entrada que coincida con palabra proporcionados",
      });
    });

  return result;
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
