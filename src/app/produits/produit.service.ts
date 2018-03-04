import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Produit} from './produit';
// import {Famille} from '../familles/famille';
// import {Fournisseur} from '../fournisseurs/fournisseur';
// import {Taille} from '../tailles/taille';


@Injectable()
export class ProduitService {
    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

    private produits = 'http://api.letiquette-shop.fr/produits';
    private searchUrl = 'http://api.letiquette-shop.fr/search';

    constructor(private http: Http) {
    }

    getProduit(id: number): Promise<Produit> {
        return this.http.get(this.produits + '/' + id)
            .toPromise()
            .then(response =>
                response.json() as Produit)
            .catch(this.handleError);
    }


    getProduitByFamille(idFamille: number): Promise<Produit[]> {
        return this.http.get(this.produits + '/famille/' + idFamille)
            .toPromise()
            .then(response =>
                response.json() as Produit[])
            .catch(this.handleError);
    }


    // getProduitByFamilleGlobale(idFamille: number): Promise<Produit[]> {
    //     return this.http.get(this.produits + '/famille/' + idFamille)
    //         .toPromise()
    //         .then(response =>
    //             response.json() as Produit[])
    //         .catch(this.handleError);
    // }


    getProduitByFamilleGlobaleAndSexe(idFamille: number, sexe: string): Promise<Produit[]> {
        return this.http.get(this.produits + '/familleGlobal/' + idFamille + '/sexe/' + sexe)
            .toPromise()
            .then(response =>
                response.json() as Produit[])
            .catch(this.handleError);
    }


    crossSelling(idProduit: number): Promise<Produit[]> {
        return this.http.get(this.produits + '/cross_selling/' + idProduit)
            .toPromise()
            .then(response =>
                response.json() as Produit[])
            .catch(this.handleError);
    }

    upSelling(idProduit: number): Promise<Produit []> {
        return this.http.get(this.produits + '/up_selling/' + idProduit)
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