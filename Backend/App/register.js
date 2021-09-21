const registerVehicle = (fleet, vehicle) => {
  if (fleet.vehicles.some(({ id }) => vehicle.id))
    throw new Error("This vehicle has already been registered into your fleet")

  fleet.vehicles.push(vehicle)
}

module.exports.registerVehicle = registerVehicle