const DefinicionServices = require("../services/Definicion.Server");

exports.fetchPalabraDefinicion = (req, res) =>
  new Promise((resolve, reject) =>
    resolve(DefinicionServices.setPalabra(req, res))
  );
