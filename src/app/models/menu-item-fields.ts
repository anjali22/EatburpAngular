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
    cuisines = JSON.parse(sessionStorage.getItem('cuisines'));
    meals = JSON.parse(sessionStorage.getItem('meals'));
    dishType = JSON.parse(sessionStorage.getItem('dishType'));


    menuFields = [
        new TextboxQuestion({
            key: 'dish_name',
            label: 'Dish name',
            order: 1,
            required: true
        }),

        new TextboxQuestion({
            key: 'price',
            label: 'Amount',
            order: 2,
            required: true
        }),

        new Dropdown({
            key: 'cuisine',
            label: 'Cuisine',
            order: 1,
            options: [this.cuisines],
            required: true
        }),

        new Dropdown({
            key: 'meal',
            label: 'Meal',
            order: 1,
            options: [this.meals],
            required: true
        }),

        new TextboxQuestion({
            key: 'menu_category',
            label: 'Menu category',
            order: 1,
            required: true
        }),

        new Dropdown({
            key: 'search_tag',
            label: 'Search tag',
            order: 1,
            canBeMultiple: true,
            options: [this.searchOption],
            required: true
        }),

        new Dropdown({
            key: 'type',
            label: 'Type',
            order: 1,
            options: [this.dishType],
            required: true
        })

    ];

}
