import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {WishlistService} from './wishlist.service';
import {Wishlist} from './wishlist';

@Component({
    selector: 'app-wishlist-root',
    templateUrl: 'wishlist.component.html'
})

export class WishlistComponent implements OnInit {
    wishlistProduits: Wishlist[];

    constructor(private wishListService: WishlistService, private router: Router) {
    }

    ngOnInit(): void {
        this.getWishlistMembre();
    }


    getWishlistMembre(): void {
        this.wishListService.getWishlistMembre()
            .then(wishlist =>
                this.wishlistProduits = wishlist
            )
            .catch(this.handleError);
    }

    supprimerProduitWishlist(idWishlist): void {
        this.wishListService.supprimerProduitWishlist(idWishlist)
            .then(wishlist => {
                this.wishlistProduits = wishlist;
                location.reload();
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}

