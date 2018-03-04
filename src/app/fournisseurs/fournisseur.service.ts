import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Fournisseur} from './fournisseur';
import {Ville} from '../villes/ville';


@Injectable()
export class FournisseurService {

    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    private fournisseurUrl = 'http://api.letiquette-shop.fr/fournisseurs';

    constructor(private http: Http) {
    }

    getAllFournisseurs(): Promise<Fournisseur[]> {
        return this.http.get(this.fournisseurUrl)
            .toPromise()
            .then(response =>
                response.json() as Fournisseur[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}