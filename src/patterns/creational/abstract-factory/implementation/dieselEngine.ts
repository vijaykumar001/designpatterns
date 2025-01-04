import { Engine } from '../interface/engine';
/**
 * Class for the DieselEngine class.
 * 
 * @class
 * @implements {Engine}
 */
export class DieselEngine implements Engine {
    getType(): string {
        return 'Diesel';
    }
}