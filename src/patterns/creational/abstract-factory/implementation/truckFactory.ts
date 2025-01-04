import { VehicleFactory } from '../interface/vehicleFactory';
import { Engine } from '../interface/engine';
import { Truck } from './truck';
import { DieselEngine } from './dieselEngine';

export class TruckFactory implements VehicleFactory {
    createVehicle(): Truck {
        return new Truck(this.createEngine());
    }

    createEngine(): Engine {
        return new DieselEngine();
    }
}
