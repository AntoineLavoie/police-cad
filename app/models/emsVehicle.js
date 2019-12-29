var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var emsVehicleSchema = mongoose.Schema({
 emsVehicle: {
  email: String,
  plate: String,
  model: String,
  color: String,
  registeredOwner: String,
 }
});

emsVehicleSchema.methods.updateVeh = function(request, response) {

 this.emsVehicle.plate = request.body.plate.trim().toUpperCase();
 this.emsVehicle.model = request.body.model.trim();
 this.emsVehicle.color = request.body.color.trim();
 this.emsVehicle.registeredOwner = request.body.registeredOwner.trim();
 this.emsVehicle.email = request.body.submitNewVeh.toLowerCase();
 response.redirect('/ems-dashboard');
};

module.exports = mongoose.model('EmsVehicle', emsVehicleSchema);
