import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { environment } from '../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({
        'x-access-token': JSON.parse(localStorage.getItem('token'))
    })
};
@Injectable()
export class RestaurantMenuService {
    constructor(private http: HttpClient, private messageService: MessageService) { }

    addMenu(payload): Observable<any> {
        return this.http.post<any>(environment.baseURL + 'addMenu', payload, httpOptions).pipe(
            tap((hero: any) => this.log(`added hero`)),
            catchError(this.handleError<any>('addHero'))
        );
    }

    getSearchTag(): Observable<any> {
        return this.http.get(environment.baseURL + 'getSearchTags').pipe(
            tap((hero: any) => this.log(`added hero`)),
            catchError(this.handleError<any>('addHero'))
        );
    }

    getCuisines(): Observable<any> {
        return this.http.get(environment.baseURL + 'getCuisines').pipe(
            tap((hero: any) => this.log(`added hero`)),
            catchError(this.handleError<any>('addHero'))
        );
    }

    getMeals(): Observable<any> {
        return this.http.get(environment.baseURL + 'getMeals').pipe(
            tap((hero: any) => this.log(`added hero`)),
            catchError(this.handleError<any>('addHero'))
        );
    }

    getDishType(): Observable<any> {
        return this.http.get(environment.baseURL + 'getDishType').pipe(
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
