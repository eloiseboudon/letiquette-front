import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { FamilleGlobal } from './familleGlobal';

@Injectable()
export class FamilleGlobalService {

    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    private famillesglobalesUrl = 'http://127.0.0.1:8000/famillesGlobales';

    constructor(private http: Http) { }

    getAllFamillesGlobal(): Promise<FamilleGlobal[]> {
        return this.http.get(this.famillesglobalesUrl)
            .toPromise()
            .then(response =>
                response.json() as FamilleGlobal[])
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}