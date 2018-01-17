import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Panier} from './panier';
import {DetailPanier} from '../detailPanier/detailPanier';


@Injectable()
export class PanierService {
    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    private panierUrl = 'http://127.0.0.1:8000/panier';  // URL to api
    private idMembre;
    private idPanier;

    constructor(private http: Http) {
    }

    ajouterPanier(idProduit: number): Promise<DetailPanier> {
        this.idMembre = localStorage.getItem('id_membre');
        const data = new URLSearchParams();
        data.append('idMembre', this.idMembre);
        data.append('idProduit', idProduit.toString());
        if (this.isPanier()) {
            this.idPanier = localStorage.getItem('id_panier');
            data.append('idPanier', this.idPanier);
        }

        // const data = 'idMembre=' + this.idMembre + '&idProduit=' + idProduit;
        return this.http.post(this.panierUrl + '/ajout', data.toString(), {headers: this.headers})
            .toPromise()
            .then(response =>
                response.json() as Panier[])
            .catch(this.handleError);
    }

    isPanier() {
        return localStorage.getItem('id_panier') !== null;
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}