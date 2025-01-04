/*
    Interface for the VehicleFactory
*/

import { Vehicle } from '../interface/vehicle';
import { Engine } from '../interface/engine';

export interface VehicleFactory {
    createVehicle(): Vehicle;
    createEngine(): Engine;
}
