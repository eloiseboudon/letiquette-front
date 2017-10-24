import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { DeclinaisonTaille } from './declinaisonTaille';
import { Taille } from '../tailles/taille';

@Injectable()
export class DeclinaisonTailleService {
    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    private declinaisonTailleUrl = 'http://127.0.0.1:8000/produitsTaille';

    constructor(private http: Http) { }

    getProduitByTaille(taille : Taille): Promise<DeclinaisonTaille[]> {
        return this.http.get(this.declinaisonTailleUrl +"/" + taille.id)
            .toPromise()
            .then(response =>
                    response.json() as DeclinaisonTaille[])
            .catch(this.handleError); 
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}