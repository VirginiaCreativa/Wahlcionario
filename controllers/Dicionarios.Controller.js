const DicionariosServices = require("../services/Dicionarios.Server");

exports.fetchDicionariosDefinicion = (req, res) =>
  new Promise((resolve, reject) =>
    resolve(DicionariosServices.setPalabra(req, res))
  );

exports.fetchDicionariosImages = (req, res) =>
  new Promise((resolve, reject) =>
    resolve(DicionariosServices.setImages(req, res))
  );

exports.fetchSetConjugacion = (req, res) =>
  new Promise((resolve, reject) =>
    resolve(DicionariosServices.setConjugacion(req, res))
  );
