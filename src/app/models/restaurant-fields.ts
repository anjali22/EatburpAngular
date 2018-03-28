import { RestaurantBase } from '../restaurant-base';
import { TextboxQuestion } from '../restaurant-textbox';
import { Dropdown } from '../restaurant-dropdown';

export class RestaurantField {

}
 export const fields: RestaurantBase<any>[] = [
    new TextboxQuestion({
        key: 'name',
        label: 'Restaurant name',
        required: true,
        order: 1
    }),

    new TextboxQuestion({
        key: 'phone',
        label: 'Contact No.',
        type: 'number',
        required: true,
        order: 2
    }),

    new TextboxQuestion({
        key: 'avg_cost_two',
        label: 'Average cost for Two',
        type: 'number',
        required: true,
        order: 3
    }),

    new TextboxQuestion({
        key: 'openTime',
        label: 'Opening Time',
        type: 'time',
        required: true,
        order: 4
    }),

    new TextboxQuestion({
        key: 'closeTime',
        label: 'Closing Time',
        type: 'time',
        required: true,
        order: 5
    }),

    new TextboxQuestion({
        key: 'category',
        label: 'Category',
        required: true,
        order: 6
    }),

    new TextboxQuestion({
         key: 'famousFor',
         label: 'Famous For',
         required: true,
         order: 7
    }),

     new TextboxQuestion({
         key: 'address.building',
         label: 'Building',
         required: true,
         order: 8
     }),
];
