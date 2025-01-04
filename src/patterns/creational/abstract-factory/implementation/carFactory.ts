import { VehicleFactory } from '../interface/vehicleFactory';
import { Engine } from '../interface/engine';
import { Car } from './car';
import { PetrolEngine } from './petrolEngine';

export class CarFactory implements VehicleFactory {
    createVehicle(): Car {
        return new Car(this.createEngine());
    }

    createEngine(): Engine {
        return new PetrolEngine();
    }
}
