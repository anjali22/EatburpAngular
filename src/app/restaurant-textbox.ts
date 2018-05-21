import { RestaurantBase } from './restaurant-base';

export class TextboxQuestion extends RestaurantBase<string> {
    controlType = 'textbox';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}
