'use strict';

var utils = require('../utils/writer.js');
var Stations = require('../service/StationsService');

module.exports.getAllRadioStations = function getAllRadioStations (req, res, next, id) {
  Stations.getAllRadioStations(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
