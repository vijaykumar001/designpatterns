# Abstract Factory Pattern

This project demonstrates the Abstract Factory Design Pattern in TypeScript by creating different types of vehicles (Car and Truck) with different engine types (Petrol and Diesel).

## Directory Structure
- `src/patterns/creational/abstract-factory/`: Contains the implementation of the Abstract Factory pattern.
- `tests/creational/abstract-factory/`: Contains the test cases for the factory implementation.

## Usage
1. Run the `index.ts` file to see the vehicle driving based on the selected type.
2. The appropriate vehicle and engine type will be created based on the selected vehicle type.

## Example
```ts
//index.ts
import { VehicleFactory } from './interface/vehicleFactory';
import { CarFactory } from './implementation/carFactory';
import { TruckFactory } from './implementation/truckFactory';

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
```

### Summary
This implementation demonstrates the Abstract Factory Design Pattern by allowing the creation of different types of vehicles with different engine types. The code adheres to SOLID principles, ensuring maintainability and scalability. The README file provides clear instructions on how to use the abstract factory, and the test cases ensure that the factory behaves as expected.
