import { Engine } from '../interface/engine';
/**
 * Class for the PetrolEngine class.
 * 
 * @class
 * @implements {Engine}
 */
export class PetrolEngine implements Engine {
    getType(): string {
        return 'Petrol';
    }
} 