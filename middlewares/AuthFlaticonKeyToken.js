const axios = require("axios");
const keys = require("../keys/keys");

async function ImplentKeyToToken() {
  const fetch = await axios
    .post("https://api.flaticon.com/v2/app/authentication", {
      apikey: keys.flaticonKey,
    })
    .then((response) => response.data.data.token)
    .catch((err) => console.log(err));
  return fetch;
}

module.exports = ImplentKeyToToken;
