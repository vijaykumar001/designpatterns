import { Engine } from '../interface/engine';

export class DieselEngine implements Engine {
    getType(): string {
        return 'Diesel';
    }
}