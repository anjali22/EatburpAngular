import { RestaurantBase } from '../Restaurant/restaurant-base';
import { TextboxQuestion } from '../Restaurant/restaurant-textbox';

export class RestaurantField {

}
 export const fields: RestaurantBase<any>[] = [
    new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
    }),

    new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
    })
];
