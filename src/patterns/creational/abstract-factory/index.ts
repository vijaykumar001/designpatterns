import { VehicleFactory } from './interface/vehicleFactory';
import { CarFactory } from './implementation/carFactory';
import { TruckFactory } from './implementation/truckFactory';
/**
 * Main entry point for the abstract factory implementation.
 * 
 * @module
 * @exports {VehicleFactory} - The VehicleFactory interface
 * @exports {CarFactory} - The CarFactory class
 * @exports {TruckFactory} - The TruckFactory class
 */
function clientCode(factory: VehicleFactory) {
    const vehicle = factory.createVehicle();
    vehicle.drive();
}

// Example usage
const vehicleType = 'car'; // Change to 'truck' for truck factory
let factory: VehicleFactory;

if (vehicleType === 'car') {
    factory = new CarFactory();
} else if (vehicleType === 'truck') {
    factory = new TruckFactory();
} else {
    throw new Error('Unsupported vehicle type');
}

clientCode(factory);