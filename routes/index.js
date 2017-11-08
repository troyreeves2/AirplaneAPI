var express = require('express');
var router = express.Router();
var ctrlAirplaneData = require('../controllers/Airplane');
var ctrlAirportData = require('../controllers/AirportData');

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

/* CLIMB DATA */
router.get('/climbData/:weight', ctrlAirplaneData.climbDataReadOne);
router.get('/climbData', ctrlAirplaneData.climbDataReadAll);

/* LANDING DATA */
router.get('/landingData/:weight', ctrlAirplaneData.landingDataReadOne);

/* AIRPORT DATA */
router.get('/airportData', ctrlAirportData.airportDataReadAll);

module.exports = router;
