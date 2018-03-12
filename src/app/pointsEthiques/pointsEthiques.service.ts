import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {PointsEthiques} from './pointsEthiques';
import {Produit} from '../produits/produit';

@Injectable()
export class PointsEthiquesService{
    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    private pointsEthiquesUrl = 'http://127.0.0.1:8000/impactsethiques';  // URL to api

    constructor(private http: Http) {

    }

    getAllPointsEthiques(): Promise<PointsEthiques[]>  {
        return this.http.get(this.pointsEthiquesUrl)
            .toPromise()
            .then(response =>
                response.json() as PointsEthiques[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


}
