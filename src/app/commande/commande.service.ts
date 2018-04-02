import {Injectable} from '@angular/core';
import {Headers, Http, URLSearchParams} from '@angular/http';
import {Membres} from '../membres/membres';
import {Panier} from '../panier/panier';
import 'rxjs/add/operator/toPromise';
import {Commande} from './commande';




@Injectable()
export class CommandeService {
    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    private commandeUrl = 'http://api.letiquette-shop.fr/commande';  // URL to api

    constructor(private http: Http) {
    }

    creerCommande(panier, membre): Promise<Commande> {
        const data = new URLSearchParams();
        data.append('panier', panier);
        data.append('membre', membre);

        return this.http.post(this.commandeUrl + '/creer', data.toString(), {headers: this.headers})
            .toPromise()
            .then(response =>
                response.json() as any[])
            .catch(this.handleError);
    }


    updateLivraison(livraison): Promise<Commande> {
        const data = new URLSearchParams();
        data.append('livraison', livraison);
        data.append('commande', '1');

        return this.http.put(this.commandeUrl + '/livraison', data.toString(), {headers: this.headers})
            .toPromise()
            .then(response =>
                response.json() as any[])
            .catch(this.handleError);
    }


    updateFacturation(facturation): Promise<Commande> {
        const data = new URLSearchParams();
        data.append('facturation', facturation);
        data.append('commande', '1');

        return this.http.put(this.commandeUrl + '/facturation', data.toString(), {headers: this.headers})
            .toPromise()
            .then(response =>
                response.json() as any[])
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}