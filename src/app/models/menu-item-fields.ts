import { RestaurantBase } from '../restaurant-base';
import { TextboxQuestion } from '../restaurant-textbox';
import { Dropdown } from '../restaurant-dropdown';
import { Button } from '../dynamic-button';

export class Menu extends RestaurantBase<any> {
    dish_name: string;
    cuisine: string;
    meal: string;
    search_tag: string;
    menu_category: string;
    amount: number;
    type: string;
}

export const menuFields: RestaurantBase<any>[] = [
    new TextboxQuestion({
        key: 'dish_name',
        label: 'Dish name',
        order: 1
    }),

    new TextboxQuestion({
        key: 'price',
        label: 'Amount',
        order: 2
    }),

    new TextboxQuestion({
        key: 'cuisine',
        label: 'Cuisine',
        order: 1
    }),

    new TextboxQuestion({
        key: 'meal',
        label: 'Meal',
        order: 1
    }),

    new TextboxQuestion({
        key: 'menu_category',
        label: 'Menu category',
        order: 1
    }),

    new TextboxQuestion({
        key: 'search_tag',
        label: 'Search tag',
        order: 1
    }),

     new TextboxQuestion({
        key: 'type',
        label: 'Type',
        order: 1
    })

];
