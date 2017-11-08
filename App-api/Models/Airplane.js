var mongoose = require('mongoose');

var ClimbSchema = new mongoose.Schema({
	weight: Number,
	vfri5: Number,
	vfri10: Number,
	vfri15: Number,
	vclmb: Number
});

mongoose.model('ClimbData', ClimbSchema, 'ClimbData');

var TakeoffSchema = new mongoose.Schema({
	weight: Number,
	flaps: Number,
	vr: Number,
	v2: Number,
	atOrBelow20: Boolean,
	above20: Boolean,
	altitude: Number,
});

mongoose.model('TakeoffData', TakeoffSchema, 'TakeoffData');

var LandingSchema = new mongoose.Schema({
	weight: Number,
	flaps: Number,
	vApp: Number,
	vRef: Number,
	vGa: Boolean,
});

mongoose.model('LandingData', LandingSchema, 'LandingData');