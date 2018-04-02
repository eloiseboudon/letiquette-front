import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {DeclinaisonEthique} from './declinaisonEthique';


@Injectable()
export class DeclinaisonEthiqueService {
    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

    private ethiqueUrl = 'http://api.letiquette-shop.fr/ethique';

    constructor(private http: Http) {

    }

    getPointEthiqueByProduit(idProduit: number): Promise<DeclinaisonEthique[]> {
        return this.http.get(this.ethiqueUrl + '/produit/' + idProduit)
            .toPromise()
            .then(response =>
                response.json() as DeclinaisonEthique[])
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}