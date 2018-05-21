import { RestaurantBase } from '../restaurant-base';
import { TextboxQuestion } from '../restaurant-textbox';
import { Dropdown } from '../restaurant-dropdown';

export const fields: RestaurantBase<any>[] = [
    new TextboxQuestion({
        key: 'name',
        label: 'Food Item name',
        required: true,
        order: 1
    }),

    new TextboxQuestion({
        key: 'cuisine',
        label: 'Cuisine',
        required: true,
        order: 2
    }),

    new TextboxQuestion({
        key: 'meal',
        label: 'Meal',
        required: true,
        order: 3
    }),

    new TextboxQuestion({
        key: 'tags',
        label: 'Tags',
        required: true,
        order: 4
    }),
];
