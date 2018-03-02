import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Produit} from '../produits/produit';
import {Famille} from '../familles/famille';
import {Fournisseur} from '../fournisseurs/fournisseur';
import {Taille} from '../tailles/taille';


@Injectable()
export class ProduitHommesService {
    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    private produitsHommesUrl = 'http://127.0.0.1:8000/tout/hommes';  // URL to api


    // private produitsFemmesFiltresUrl = 'http://127.0.0.1:8000/produitsFemmesFiltre';

    constructor(private http: Http) {
    }


    getProduitByFiltreTaille(arrayTailles: number[]) {
        return this.http.get(this.produitsHommesUrl + '/taille/' + arrayTailles)
            .toPromise()
            .then(response =>
                response.json() as Produit[])
            .catch(this.handleError);
    }

    getAllProduits(): Promise<Produit[]> {
        return this.http.get(this.produitsHommesUrl)
            .toPromise()
            .then(response =>
                response.json() as Produit[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}