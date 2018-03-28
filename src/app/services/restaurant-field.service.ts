import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { RestaurantBase } from '../restaurant-base';

@Injectable()
export class RestaurantControlService {
    constructor() { }

    toFormGroup(fields: RestaurantBase<any>[]) {
        const group: any = {};

        fields.forEach(field => {
            group[field.key] = field.required ? new FormControl(field.value || '', Validators.required)
                : new FormControl(field.value || '');
        });
        return new FormGroup(group);
    }
}
