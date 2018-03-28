import { RestaurantBase } from './restaurant-base';

export class Dropdown extends RestaurantBase<string> {
    controlType = 'dropdown';
    options: { key: string, value: string }[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}
