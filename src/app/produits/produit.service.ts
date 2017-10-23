import { Injectable }    from '@angular/core';
import { Headers, Http , Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Produit } from './produit';
import { Famille } from '../familles/famille';
import { Fournisseur } from '../fournisseurs/fournisseur';



@Injectable()
export class ProduitService{
    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    private produitsUrl = 'http://127.0.0.1:8000/produitsFemmes';  // URL to api
    private produitsFamilleUrl;

    constructor(private http: Http) { }

    getAllProduitsFemmes(): Promise<Produit[]> {
        return this.http.get(this.produitsUrl)
            .toPromise()
            .then(response => 
                response.json() as Produit[])
            .catch(this.handleError);
    }

    getProductByFamille(famille :string): Promise<Produit[]> {
        this.produitsFamilleUrl = 'http://127.0.0.1:8000/produitsFemmesByFamille';
        this.produitsFamilleUrl = this.produitsFamilleUrl + '/' + famille;
        return this.http.get(this.produitsFamilleUrl)
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