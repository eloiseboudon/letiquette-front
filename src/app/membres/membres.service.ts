import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Membres} from './membres';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MembresService {
    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    private membresUrl = 'http://api.letiquette-shop.fr/membres';  // URL to api

    constructor(private http: Http) {
    }

    create(nom, prenom, login, password, adresse, email, telephone, idVille): Promise<Membres> {
        const data = 'nom=' + nom + '&prenom=' + prenom + '&login=' + login + '&password=' + password + '&adresse=' + adresse
            + '&email=' + email + '&telephone=' + telephone + '&idVille=' + idVille;

        return this.http
            .post(this.membresUrl, data, {headers: this.headers})
            .toPromise()
            .then(response =>
                response.json() as Membres)
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
