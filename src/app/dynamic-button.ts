import { RestaurantBase } from './restaurant-base';

export class Button extends RestaurantBase<string> {
    controlType = 'button';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}
