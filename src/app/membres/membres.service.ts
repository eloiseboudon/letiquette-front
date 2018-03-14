import {Injectable} from '@angular/core';
import {Headers, Http, URLSearchParams} from '@angular/http';
import {Membres} from './membres';

import 'rxjs/add/operator/toPromise';
import {Panier} from '../Panier/panier';
import {Ville} from '../villes/ville';
import {stringify} from 'querystring';

@Injectable()
export class MembresService {
    private headersCreate = new Headers({'Content-Type': 'application/json'});

    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    private membresURL = 'http://127.0.0.1:8000/membres';  // URL to api

    constructor(private http: Http) {
    }

    creer(membre: any): Promise<Membres> {

        const dataMembres = {
            civilite: membre.civilite,
            nom : membre.nom,
            prenom : membre.prenom,
            email : membre.email,
            username : membre.email,
            telephone : membre.telephone,
            plainPassword: {
                first: membre.password,
                second: membre.password_verif
            }
        };

        return this.http.post(this.membresURL + '/inscription', dataMembres, {headers: this.headersCreate})
            .toPromise()
            .then(response =>
                response.json() as any[])
            .catch(this.handleError);

    }


    connexion(membre: any): Promise<Membres> {
        const username = membre.username;
        const password = membre.password;


        const dataMembres = new URLSearchParams();
        dataMembres.append('username', username);
        dataMembres.append('password', password);

        return this.http.post(this.membresURL + '/connexion', dataMembres.toString(), {headers: this.headers})
            .toPromise()
            .then(response =>
                response.json() as Membres)
            .catch(this.handleError);

    }


    getMembre(id: number): Promise<Membres> {
        return this.http.get(this.membresURL)
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
