var mongoose = require('mongoose');
var ClimbData = mongoose.model('ClimbData');
var landing = mongoose.model('landing');
var takeoff = mongoose.model('takeoff');


//utility method for the module
var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
}

//// CLIMB DATA ////////////////////////////////////////////////////////////////
/* GET all ClimbData records */
module.exports.climbDataReadAll = function(req, res) {
    console.log("Finding all Climb Data Records", req);

    ClimbData
        .find({})
        .exec(function(err, climbData) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
            }
            console.log(climbData);
            sendJSONresponse(res, 200, climbData);
        });
}

/* GET ClimbData by weight */
module.exports.climbDataReadOne = function(req, res) {
    console.log('Finding Climb Data Record', req.params);
    if (req.params && req.params.weight) {
        ClimbData
            .find({
                weight: req.params.weight
            })
            .exec(function(err, climbData) {
                if (!climbData) {
                    sendJSONresponse(res, 404, {
                        "message": "weight value not found"
                    });
                    return;
                }
                else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(climbData);
                sendJSONresponse(res, 200, climbData);
            });
    }
    else {
        console.log('No weight value specified');
        sendJSONresponse(res, 404, {
            "message": "No weight value in request"
        });
    }
};

//// LANDING DATA //////////////////////////////////////////////////////////////
/* GET LandingData by weight */
module.exports.landingDataReadOne = function(req, res) {
    console.log('Finding Climb Data Record', req.params);
    if (req.params && req.params.weight) {
        landing
            .find({
                weight: req.params.weight,
            })
            .exec(function(err, landingData) {
                if (!landingData) {
                    sendJSONresponse(res, 404, {
                        "message": "weight value not found"
                    });
                    return;
                }
                else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(landingData);
                sendJSONresponse(res, 200, landingData);
            });
    }
    else {
        console.log('No weight value specified');
        sendJSONresponse(res, 404, {
            "message": "No weight value in request"
        });
    }
};