import { Injectable, OnInit } from '@angular/core';

import { RestaurantBase } from '../restaurant-base';
import { TextboxQuestion } from '../restaurant-textbox';
import { Dropdown } from '../restaurant-dropdown';
import { RestaurantService } from '../services/restaurant.service';

@Injectable()
export class Menu extends RestaurantBase<any> {

    constructor(private restaurantService: RestaurantService) {
        super();
    }

    searchOption = JSON.parse(sessionStorage.getItem('searchTag'));

    menuFields = [
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

        new Dropdown({
            key: 'search_tag',
            label: 'Search tag',
            order: 1,
            canBeMultiple: true,
            options: [this.searchOption]
        }),

        new TextboxQuestion({
            key: 'type',
            label: 'Type',
            order: 1
        })

    ];

}
