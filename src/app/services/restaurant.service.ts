import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Restaurant } from '../models/restaurant';
import { RestaurantBase } from '../restaurant-base';
import { MessageService } from './message.service';
import { fields } from '../models/restaurant-fields';
import { environment } from '../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({
        'x-access-token': JSON.parse(localStorage.getItem('token'))
    })
};

@Injectable()
export class RestaurantService {
    public images: any;
    body: any;
    constructor(private http: HttpClient, private messageService: MessageService) { }

    addRestaurant(payload): Observable<any> {
        return this.http.post<any>(environment.baseURL + 'uploadrestoimage', payload, httpOptions).pipe(
            tap((hero: any) => this.log(`added hero`)),
            catchError(this.handleError<any>('addHero'))
        );
    }

    getFields() {
        return fields;
    }

    getRestoName(): Observable<any> {
        return this.http.get<any>(environment.baseURL + 'searchRestoName').pipe(
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
