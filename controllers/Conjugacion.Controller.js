const ConjugacionServer = require("../services/Conjugacion.Server");

exports.fetchSetConjugacion = (req, res) =>
  new Promise((resolve, reject) =>
    resolve(ConjugacionServer.setConjugacion(req, res))
  );
