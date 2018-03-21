import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Restaurant } from '../models/restaurant';
import { RestaurantBase } from '../Restaurant/restaurant-base';
import { TextboxQuestion } from '../Restaurant/restaurant-textbox';
import { MessageService } from './message.service';
import { RestaurantField, fields } from '../models/restaurant-fields';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': undefined })
};

@Injectable()
export class RestaurantService {
    public images: any;
    body: any;
    constructor(private http: HttpClient, private messageService: MessageService) { }

    /** GET Countries from the server */
    getCities(state): Observable<Restaurant[]> {
        return this.http.get<Restaurant[]>('http://localhost:3002/api/citylist?state_id=' + state)
            .pipe(
            tap(measures => this.log(`fetched Country`)),
            catchError(this.handleError('getCategory', []))
            );
    }
    upload(file, resto): Observable<any> {
        console.log('body-----------', resto);
        return this.http.post<any>('http://localhost:3000/uploadimage', {
            images: file,
            body: resto
        }, httpOptions).pipe(
            tap((restaurant: any) => this.log(`added restaurant`)),
            catchError(this.handleError<any>('addHero'))
        );
    }
    getQuestions(): Observable<any[]> {
        return this.http.get<any>('./src/app/models/restaurant-field.json').map((response) => response.json()
            .map((item) => {
                console.log(item, 'items-----------');
            })
        );
    }

    getFields() {
        return fields;
    }
    /* {

        const fields: RestaurantBase<any>[] = [
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

        return fields.sort((a, b) => a.order - b.order);
    } */

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add('InventoryService: ' + message);
    }
}
