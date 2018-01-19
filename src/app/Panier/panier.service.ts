import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Panier} from './panier';
import {DetailPanier} from '../detailPanier/detailPanier';
import {Produit} from '../produits/produit';


@Injectable()
export class PanierService {
    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    private panierUrl = 'http://127.0.0.1:8000/panier';  // URL to api
    private idPanier;
    detailPanier: any[] = [];

    constructor(private http: Http) {
    }

    ajouterPanier(idProduit: number): Promise<DetailPanier> {
        const data = new URLSearchParams();
        data.append('idProduit', idProduit.toString());

        if (this.isPanier()) {
            this.idPanier = localStorage.getItem('id_panier');
            data.append('idPanier', this.idPanier);
        }

        return this.http.post(this.panierUrl + '/ajout', data.toString(), {headers: this.headers})
            .toPromise()
            .then(response =>
                response.json() as Panier[])
            .catch(this.handleError);
    }

    isPanier() {
        return localStorage.getItem('id_panier') !== null;
    }


    getProduitPanier(): Promise<DetailPanier[]> {
        this.idPanier = localStorage.getItem('id_panier');
        return this.http.get(this.panierUrl + '/' + this.idPanier)
            .toPromise()
            .then(response =>
                // console.log(response.json());
                // this.detailPanier = response.json().detailPanier;
                response.json() as DetailPanier[]
            )
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}