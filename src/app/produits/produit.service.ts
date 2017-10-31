import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Produit } from './produit';
import { Famille } from '../familles/famille';
import { Fournisseur } from '../fournisseurs/fournisseur';
import { Taille } from '../tailles/taille';



@Injectable()
export class ProduitService {
    private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    private produitsFamilleUrl;
    private declinaisonTailleUrl = 'http://127.0.0.1:8000/produitsTaille';
    private produitsTailleFamilleUrl = 'http://127.0.0.1:8000/produitsTailleFamille';s
    private produitsFiltresUrl = 'http://127.0.0.1:8000/produitsFiltres';

    constructor(private http: Http) { }

    //*************** */
    // GLOBAL 
    //****************/
    getProduitByFamille(famille: Famille): Promise<Produit[]> {
        this.produitsFamilleUrl = 'http://127.0.0.1:8000/produitsFamille';
        this.produitsFamilleUrl = this.produitsFamilleUrl + '/' + famille.id;
        return this.http.get(this.produitsFamilleUrl)
            .toPromise()
            .then(response =>
                response.json() as Produit[])
            .catch(this.handleError);
    }


    getProduitByTaille(taille: Taille): Promise<Produit[]> {
        return this.http.get(this.declinaisonTailleUrl + "/" + taille.id)
            .toPromise()
            .then(response =>
                response.json() as Produit[])
            .catch(this.handleError);
    }


    getProduitByTailleFamille(taille: Taille, famille: Famille): Promise<Produit[]> {
        return this.http.get(this.produitsTailleFamilleUrl + "/" + taille.id + "/" + famille.id)
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