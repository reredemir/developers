const parkVehicle = (vehicle, location) => {
  if (vehicle.location === location)
    throw new Error("The vehicle is already parked at this location")

  vehicle.location = location
}

module.exports.parkVehicle = parkVehicle