var unirest = require("unirest");
const axios = require("axios");

async function Translate() {
  const options = {
    method: "POST",
    url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "accept-encoding": "application/gzip",
      "x-rapidapi-key": "5f1f1ffb88mshad23f7fca3e79ecp1edd2ajsnbab2c10c880b",
      "x-rapidapi-host": "google-translate1.p.rapidapi.com",
    },
    data: { q: "Hello, world!", source: "en", target: "es" },
  };
  let req = await axios(options)
    .then((response) => console.log(">>>", response))
    .catch((err) => console.log(err));

  return req;
  // req.end((res) => {
  //   if (res.error) throw new Error(res.error);
  //   result = res.body.data.translations[0].translatedText;
  // });
  // console.log("===", result);
}

module.exports = Translate;
