'use strict';


/**
 * This is a summary
 * This is a description
 *
 * id Integer The id to consume. (optional)
 * returns List
 **/
exports.getAllRadioStations = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "url" : "url"
}, {
  "name" : "name",
  "url" : "url"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

