import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Panier} from './panier';


@Injectable()
export class PanierService {
    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    private panierUrl = 'http://127.0.0.1:8000/panier';  // URL to api
    private idMembre;
    private idPanier;

    constructor(private http: Http) {
    }

    ajouterPanier(idProduit: number): Promise<Panier[]> {
        this.idPanier = localStorage.getItem('id_panier');
        const data = 'idPanier=' + this.idPanier + '&idProduit=' + idProduit;
        return this.http.post(this.panierUrl + '/ajout', data, {headers: this.headers})
            .toPromise()
            .then(response =>
                response.json() as Panier[])
            .catch(this.handleError);
    }


    creerPanier(): Promise<Panier> {
        this.idMembre = localStorage.getItem('id_membre');
        const data = 'idMembre=' + this.idMembre;
        return this.http.post(this.panierUrl, data, {headers: this.headers})
            .toPromise()
            .then(response =>
                response.json() as Panier)
            .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}