import { Engine } from '../interface/engine';

export class PetrolEngine implements Engine {
    getType(): string {
        return 'Petrol';
    }
} 