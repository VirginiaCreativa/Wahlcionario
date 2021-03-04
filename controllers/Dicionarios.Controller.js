const DicionariosServices = require("../services/Dicionarios.Server");

exports.fetchDicionariosDefinicion = (req, res) =>
  new Promise((resolve, reject) =>
    resolve(DicionariosServices.setPalabra(req, res))
  );

exports.fetchDicionariosSinonimo = (req, res) =>
  new Promise((resolve, reject) =>
    resolve(DicionariosServices.setSinonimos(req, res))
  );
