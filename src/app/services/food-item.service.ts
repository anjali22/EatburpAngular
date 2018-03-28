import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { fields } from '../models/food-item-fields';
import { environment } from '../../environments/environment';

@Injectable()
export class FoodItemService {
    public images: any;
    body: any;
    constructor(private http: HttpClient, private messageService: MessageService) { }

    getFields() {
        return fields;
    }

    addFoodItem(payload): Observable<any> {
        return this.http.post<any>(environment.baseURL + 'addfooditem', payload).pipe(
            tap((hero: any) => this.log(`added hero`)),
            catchError(this.handleError<any>('addHero'))
        );
    }

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
