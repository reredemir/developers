const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { registerVehicle } = require('../../App/register');

// Scenario 1: I can register a vehicle

When('I register this vehicle into my fleet', function () {
  registerVehicle(this.fleet, this.vehicle)
});

Then('this vehicle should be part of my vehicle fleet', function () {
  assert.deepEqual(this.fleet.vehicles, [this.vehicle]);
});

// Scenario 2: I can't register same vehicle twice

When('I try to register this vehicle into my fleet', function () {
});

Then('I should be informed this this vehicle has already been registered into my fleet', function () {
  assert.throws(
    () => {
      registerVehicle(this.fleet, this.vehicle)
    },
    {
      message: 'This vehicle has already been registered into your fleet',
    }
  );
});

// Scenario 3: Same vehicle can belong to more than one fleet

Given('the fleet of another user', function () {
  this.fleetBis = {
    id: 2,
    vehicles: []
  }
});

Given('this vehicle has been registered into the other user\'s fleet', function () {
  registerVehicle(this.fleetBis, this.vehicle)
});