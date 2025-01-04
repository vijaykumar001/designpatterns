import { Vehicle } from '../interface/vehicle';
import { Engine } from '../interface/engine';

export class Car implements Vehicle {
    private engine: Engine;

    constructor(engine: Engine) {
        this.engine = engine;
    }

    drive(): void {
        console.log(`Driving a car with ${this.engine.getType()} engine.`);
    }
} 