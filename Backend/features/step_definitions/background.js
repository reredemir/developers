const { Given } = require('@cucumber/cucumber');
const { registerVehicle } = require('../../App/register');

Given('my fleet', function () {
  this.fleet = {
    id: 1,
    vehicles: []
  }
});

Given('a vehicle', function () {
  this.vehicle = {
    id: 1,
    name: "Peugeot 208",
    location: null
  }
});


Given("I have registered this vehicle into my fleet", function () {
  registerVehicle(this.fleet, this.vehicle)
})