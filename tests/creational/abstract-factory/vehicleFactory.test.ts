import { CarFactory } from '../../../src/patterns/creational/abstract-factory/implementation/carFactory';
import { TruckFactory } from '../../../src/patterns/creational/abstract-factory/implementation/truckFactory';
import { Car } from '../../../src/patterns/creational/abstract-factory/implementation/car';
import { Truck } from '../../../src/patterns/creational/abstract-factory/implementation/truck';
import { Vehicle } from '../../../src/patterns/creational/abstract-factory/interface/vehicle';
/**
 * Test cases for the abstract factory implementation.
 */
describe('VehicleFactory', () => {
    it('should create a Car with Petrol engine', () => {
        const factory = new CarFactory();
        const vehicle: Vehicle = factory.createVehicle();
        expect(vehicle).toBeInstanceOf(Car);
        expect(vehicle.drive).toBeDefined();
    });

    it('should create a Truck with Diesel engine', () => {
        const factory = new TruckFactory();
        const vehicle: Vehicle = factory.createVehicle();
        expect(vehicle).toBeInstanceOf(Truck);
        expect(vehicle.drive).toBeDefined();
    });
}); 