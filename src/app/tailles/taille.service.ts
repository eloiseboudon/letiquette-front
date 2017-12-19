import { Injectable } from '@angular/core';
import { Headers, Http , Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Taille } from './taille';



@Injectable()
export class TailleService {

    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    private tailleUrl = 'http://127.0.0.1:8000/tailles';

    constructor(private http: Http) { }

    getTailleByIDProduct(id): Promise<Taille[]> {
        return this.http.get(this.tailleUrl + '/produit/' + id)
            .toPromise()
            .then(response =>
                response.json() as Taille[])
            .catch(this.handleError);}

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}