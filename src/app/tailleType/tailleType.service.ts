import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {TailleType} from './tailleType';

@Injectable()
export class TailleTypeService {
    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    private tailleTypeUrl = 'http://api.letiquette-shop.fr/tailleType';  // URL to api
    private tailleTypeByFamilleUrl;


    constructor(private http: Http) {
    }

    getAllTailleType(): Promise<TailleType[]> {
        return this.http.get(this.tailleTypeUrl)
            .toPromise()
            .then(response =>
                response.json() as TailleType[])
            .catch(this.handleError);
    }

    getTailleTypeByFamilleGlobale(idFamille: number): Promise<TailleType[]> {
        this.tailleTypeByFamilleUrl = this.tailleTypeUrl + '/' + idFamille;
        return this.http.get(this.tailleTypeByFamilleUrl)
            .toPromise()
            .then(response =>
                response.json() as TailleType[])
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
