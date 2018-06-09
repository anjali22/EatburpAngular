import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

import { RestaurantBase } from '../restaurant-base';

@Injectable()
export class RestaurantControlService {
    constructor(private fb: FormBuilder) { }
     group: any = {};
     public newForm: FormGroup; // to group all the fields in a form

     /** creates new form and insert a form array of inputFields. */
    toFormGroup(fields) {
         this.newForm = this.fb.group({
            inputFields: this.fb.array([
               this.initializeFields(fields)
            ])
        });

        return this.newForm;
    }

    /** This method initialize all the fields with form Control. And again group them into one group. */
    initializeFields(fields): any {
        for (let i = 0; i < fields.length; i++) {
            this.group[fields[i].key] = fields[i].canBeMultiple ? this.fb.array([this.fb.group({ search_tag: [''] })]) :
                (fields[i].required ? new FormControl(null, Validators.required) : new FormControl());
        }
         return this.fb.group(this.group);
    }

    /** This method add 10 more fields into the form. 1st we took the name of form array in whih we want to insert
     *  and then push fields using initializeFields method.
     */
    addFields(fields) {
        // for (let i = 0; i < 9; i++) {
            const control = <FormArray>this.newForm.controls['inputFields'];
            control.push(this.initializeFields(fields));
        // }

    }

    addField(field, control) {
        control.push(
            this.fb.group({
                search_tag: ['']
            })
        );
    }

    /* toFormGroup(fields: RestaurantBase<any>[]) {
        const group: any = {};

        fields.forEach(field => {
            group[field.key] = field.required ? new FormControl(field.value || '', Validators.required)
                : new FormControl(field.value || '');
        });
        return new FormGroup(group);
    } */
}
