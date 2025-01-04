import { VehicleFactory } from '../interface/vehicleFactory';
import { Engine } from '../interface/engine';
import { Car } from './car';
import { PetrolEngine } from './petrolEngine';
/**
 * Class for the CarFactory class.
 * 
 * @class
 * @implements {VehicleFactory}
 */
export class CarFactory implements VehicleFactory {
    createVehicle(): Car {
        return new Car(this.createEngine());
    }

    createEngine(): Engine {
        return new PetrolEngine();
    }
}
