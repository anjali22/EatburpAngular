import { RestaurantBase } from '../restaurant-base';
import { TextboxQuestion } from '../restaurant-textbox';
import { Dropdown } from '../restaurant-dropdown';

export class RestaurantField {

}
 export const fields: RestaurantBase<any>[] = [
    new TextboxQuestion({
        key: 'restaurant_name',
        label: 'Restaurant name',
        required: true,
        order: 1
    }),

    new TextboxQuestion({
        key: 'phone_number',
        label: 'Contact No.',
        type: 'number',
        order: 2,
        required: false
    }),

    new TextboxQuestion({
        key: 'average_cost_for_two',
        label: 'Average cost for Two',
        type: 'number',
        order: 3,
        required: false
    }),

    new TextboxQuestion({
        key: 'open_time',
        label: 'Opening Time',
        type: 'time',
        order: 4,
        required: false
    }),

    new TextboxQuestion({
        key: 'close_time',
        label: 'Closing Time',
        type: 'time',
        order: 5,
        required: false
    }),

    new TextboxQuestion({
        key: 'category',
        label: 'Category',
        order: 6,
        required: false
    }),

    new TextboxQuestion({
        key: 'famous_dishes',
         label: 'Famous For',
         order: 7,
        required: false
    }),

     new TextboxQuestion({
         key: 'rush_hours',
         label: 'Rush Hours',
         order: 8,
         required: false
     }),

     new TextboxQuestion({
         key: 'delivery_offered_in_kms',
         label: 'Delivery offered in kms',
         order: 9,
         required: false
     }),

     new TextboxQuestion({
         key: 'payment_mode',
         label: 'Payment Options',
         order: 10,
         required: false
     }),

     new TextboxQuestion({
         key: 'address.building',
         label: 'Building',
         required: true,
         order: 12
     }),

     new TextboxQuestion({
         key: 'address.street',
         label: 'Street',
         order: 13,
         required: false
     }),

     new TextboxQuestion({
         key: 'address.locality',
         label: 'Locality',
         order: 14,
         required: false
     }),

     new TextboxQuestion({
         key: 'address.zipcode',
         label: 'Pincode',
         order: 15,
         required: false
     }),
];
