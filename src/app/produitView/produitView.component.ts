import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Produit} from '../produits/produit';
import {ProduitService} from '../produits/produit.service';

import {Image} from '../image/image';
import {ImageService} from '../image/image.service';
import {TailleService} from '../tailles/taille.service';
import {Taille} from '../tailles/taille';
import {PanierService} from '../panier/panier.service';
import {Panier} from '../panier/panier';
import {browser} from 'protractor';


@Component({
    selector: 'produitView-root',
    templateUrl: 'produitView.component.html'
})


export class ProduitViewComponent implements OnInit {
    produit: Produit;
    id: number;
    private sub: any;
    imageList: Image[];
    tailleList: Taille[];
    panier: Panier;
    panierList: Panier[];

    constructor(private route: ActivatedRoute, private produitService: ProduitService,
                private tailleService: TailleService,
                private imageService: ImageService, private panierService: PanierService) {
    }

    ngOnInit(): void {

        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
        this.getProduit(this.id);
        this.getImages(this.id);
        this.getTailles(this.id);
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


    async ajouterPanier(idProduit) {
        if (!this.isPanier()) {
            this.creerPanier();
            this.panier = await this.panierService.creerPanier();
        }


        this.panierService
            .ajouterPanier(idProduit)
            .then(panier =>
                this.panierList = panier)
            .catch(this.handleError);

    }

    isPanier() {
        return localStorage.getItem('id_panier') !== null;
    }

    creerPanier(): void {
        this.panierService
            .creerPanier()
            .then(panier => {
                this.panier = panier;
                localStorage.setItem('id_panier', panier.id);
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}