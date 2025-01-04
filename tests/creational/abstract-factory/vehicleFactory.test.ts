import { CarFactory, TruckFactory, Vehicle, Car, Truck } from '../../../src/patterns/creational/abstract-factory/index';

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