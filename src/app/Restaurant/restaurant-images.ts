import { RestaurantBase } from './restaurant-base';

export class Images extends RestaurantBase<File> {
    controlType = 'file';
    type: File;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}
