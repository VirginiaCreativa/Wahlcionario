const axios = require("axios");

async function setConjugacion(req, res) {
  try {
    const response = await axios
      .get(
        // `https://raw.githubusercontent.com/asosab/esp_verbos/master/esp_verbos.json`
        "https://raw.githubusercontent.com/ghidinelli/fred-jehle-spanish-verbs/master/jehle_verb_lookup.json"
      )
      .then((response) => {
        // res.status(200).send({ conjugacion: response });
        // const result = response.data
        //   .filter((item) => item.verbo === req.params.search)
        //   .map((item) => item);
        // res.status(200).send({
        //   conjugacion: result,
        // });

        // console.log(response);
        // const result = Object.keys(response).filter(
        //   (item) => item === req.params.search
        // );
        // res.status(200).send({ conjugacion: result });
        // console.log(result);
        const data = response.data;
        const result = Object.keys(data).map((item) => item);
        // const result = Object.keys(data).filter((item) => item === "enamorar");
        // console.log(result);
        JSON.parse(data);

        // for (let i = 0; i < data.length; i + 1) {
        //   const element = data[i].map((item) => item.infinitive);
        //   console.log(element.slice);
        // }

        res.status(200).send(data);
      });
    return response;
  } catch (error) {
    console.log(error);
  }
}

module.exports = setConjugacion;
