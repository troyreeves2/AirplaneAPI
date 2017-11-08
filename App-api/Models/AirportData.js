var mongoose = require('mongoose');
var AirportData = mongoose.model('AirportData');

//utility method for the module
var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(content);
}

/* GET all AirportData records */
module.exports.airportDataReadAll = function(req, res)
{
  console.log("Finding all Climb Data Records", req);
  
  AirportData
    .find({})
    .exec(function(err, airportData){
      if(err){
        console.log(err);
        sendJSONresponse(res, 404, err);
      }
      console.log(airportData);
      sendJSONresponse(res, 200, airportData);
    });
}