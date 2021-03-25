const axios = require("axios");
const keys = require("../keys/keys");

async function Translate(word) {
  try {
    const result = axios.get(
      `https://od-api.oxforddictionaries.com/api/v2/translations/es/en/${word}?strictMatch=false&fields=translations`,
      {
        headers: {
          Accept: "application/json",
          app_id: keys.oxfordAppId,
          app_key: keys.oxfordAppKeys,
        },
      }
    );
    return result;
  } catch (err) {
    console.log(err);
  }
}

module.exports = Translate;
