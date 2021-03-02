const DiccionariosServices = require("../services/Diccionarios.Server");

exports.fetchPalabraDiccionario = (req, res) =>
  new Promise((resolve, reject) =>
    resolve(DiccionariosServices.setPalabra(req, res))
  );
