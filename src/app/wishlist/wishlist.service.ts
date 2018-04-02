import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Wishlist} from './wishlist';


@Injectable()
export class WishlistService {
    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    private wishlistUrl = 'http://api.letiquette-shop.fr/wishlist';  // URL to api

    constructor(private http: Http) {
    }


    getWishlistMembre(): Promise<Wishlist[]> {
        return this.http.get(this.wishlistUrl)
            .toPromise()
            .then(response =>
                response.json() as Wishlist[])
            .catch(this.handleError);
    }


    ajouterWishlist(idProduit: number, idMembre: number): Promise<Wishlist[]> {
        const data = new URLSearchParams();
        data.append('idProduit', idProduit.toString());
        data.append('idMembre', idMembre.toString());

        return this.http.post(this.wishlistUrl + '/ajout', data.toString(), {headers: this.headers})
            .toPromise()
            .then(response =>
                response.json() as Wishlist[])
            .catch(this.handleError);
    }

    // ajouterPanier(idProduit: number): Promise<Wishlist[]> {
    //     const data = new URLSearchParams();
    //     data.append('idProduit', idProduit.toString());
    //
    //     return this.http.post(this.wishlistUrl + '/ajoutPanier', data.toString(), {headers: this.headers})
    //         .toPromise()
    //         .then(response =>
    //             response.json() as Wishlist[])
    //         .catch(this.handleError);
    // }


    supprimerProduitWishlist(id: number): Promise<Wishlist[]> {
        return this.http.delete(this.wishlistUrl + '/supprimerProduit/' + id, {headers: this.headers})
            .toPromise()
            .then(response =>
                response.json() as Wishlist[])
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}