import { Vehicle } from '../interface/vehicle';
import { Engine } from '../interface/engine';

export class Truck implements Vehicle {
    private engine: Engine;

    constructor(engine: Engine) {
        this.engine = engine;
    }

    drive(): void {
        console.log(`Driving a truck with ${this.engine.getType()} engine.`);
    }
}