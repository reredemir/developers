const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { parkVehicle } = require('../../App/park');

Given("a location", function () {
  this.location = "Lyon, Cordelier"
})

// Scenario 1: Successfully park a vehicle

When('I park my vehicle at this location', function () {
  parkVehicle(this.vehicle, this.location)
});

Then('the known location of my vehicle should verify this location', function () {
  assert.equal(this.vehicle.location, this.location);
});

// Scenario 2: Can't localize my vehicle to the same location two times in a row

Given("my vehicle has been parked into this location", function () {
  parkVehicle(this.vehicle, this.location)
})

When('I try to park my vehicle at this location', function () {
});

Then('I should be informed that my vehicle is already parked at this location', function () {
  assert.throws(
    () => {
      parkVehicle(this.vehicle, this.location)
    },
    {
      message: 'The vehicle is already parked at this location',
    }
  );
});