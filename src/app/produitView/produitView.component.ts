import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Produit} from '../produits/produit';
import {ProduitService} from '../produits/produit.service';

import {Image} from '../image/image';
import {ImageService} from '../image/image.service';
import {TailleService} from '../tailles/taille.service';
import {Taille} from '../tailles/taille';
import {PanierService} from '../panier/panier.service';
import {DetailPanier} from '../detailPanier/detailPanier';
import {WishlistService} from '../wishlist/wishlist.service';
import {Wishlist} from '../wishlist/wishlist';


@Component({
    selector: 'produitView-root',
    templateUrl: 'produitView.component.html'
})


export class ProduitViewComponent implements OnInit {
    produit: Produit;
    taille: Taille;
    id: number;
    private sub: any;
    imageList: Image[];
    tailleList: Taille[];
    panier: DetailPanier;
    crossSellingProduits: Produit[];
    upSellingProduits: Produit[];
    wishlist: Wishlist[];


    constructor(private route: ActivatedRoute, private produitService: ProduitService,
                private tailleService: TailleService,
                private imageService: ImageService, private panierService: PanierService, private wishlistService: WishlistService) {
        this.route.params.subscribe(params => {
            this.id = params.id;

            this.getProduit(this.id);
            this.getImages(this.id);
            this.getTailles(this.id);
            this.crossSelling(this.id);
            this.upSelling(this.id);
            window.scroll(0, 0);

        });
    }

    ngOnInit(): void {

        this.sub = this.route.params.subscribe(params => {
            this.id = params.id;
        });
        this.getProduit(this.id);
        this.getImages(this.id);
        this.getTailles(this.id);
        this.crossSelling(this.id);
        this.upSelling(this.id);
        $('#success-alert-panier').hide();
        $('#success-alert-wishlist').hide();

    }


    getProduit(id): void {
        this.produitService
            .getProduit(id)
            .then(produit => {
                this.produit = produit;
            })
            .catch(this.handleError);

    }

    getTailles(id): void {
        this.tailleService
            .getTailleByIDProduct(id)
            .then(tailles => {
                this.tailleList = tailles;
            })
            .catch(this.handleError);
    }


    getImages(id): void {
        this.imageService
            .getImagesByProduit(id)
            .then(image =>
                this.imageList = image)
            .catch(this.handleError);
    }


    ajouterPanier(idProduit): void {
        this.panierService
            .ajouterPanier(idProduit, this.taille.id)
            .then(panier => {
                this.panier = panier;
                localStorage.setItem('id_panier', panier.panier.id);
                $('#success-alert-panier').show();
                window.setTimeout(function () {
                    location.reload();
                }, 2000);
            })
            .catch(this.handleError);
    }


    ajouterWishlist(idProduit): void {
        this.wishlistService
            .ajouterWishlist(idProduit, 1)
            .then(wishlist => {
                this.wishlist = wishlist;
                $('#success-alert-wishlist').show();
                window.setTimeout(function () {
                    location.reload();
                }, 2000);
            })
            .catch(this.handleError);
    }

    produitTailleCheck(taille): void {
        this.taille = taille;
        for (let i = 0; i < this.tailleList.length; i++) {
            this.tailleList[i].checked = false;
        }
        taille.checked = true;
    }

    produitTailleUncheck(taille): void {
        taille.checked = false;
        this.taille = null;
    }


    crossSelling(idProduit): void {
        this.produitService
            .crossSelling(idProduit)
            .then(crossseling =>
                this.crossSellingProduits = crossseling);
    }

    upSelling(idProduit): void {
        this.produitService
            .upSelling(idProduit)
            .then(upselling =>
                this.upSellingProduits = upselling);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}