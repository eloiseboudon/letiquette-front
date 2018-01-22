import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PanierService} from './panier.service';
import {DetailPanier} from '../detailPanier/detailPanier';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
    selector: 'panier-root',
    templateUrl: 'panier.component.html'
})

export class PanierComponent implements OnInit {
    detailPanierList: DetailPanier[];
    total: number = 0;


    constructor(private panierService: PanierService, private router: Router) {
    }

    ngOnInit(): void {
        this.getProduitsPanier();

    }

    getProduitsPanier(): void {
        this.panierService
            .getProduitPanier()
            .then(async detailPanier => {
                this.detailPanierList = detailPanier;
                await this.detailPanierList;
                this.prixTotal();
            })
            .catch(this.handleError);
    }

    quantitePlus(detailPanierId): void {
        this.panierService
            .quantitePlus(detailPanierId)
            .then(detailPanier => {
                this.detailPanierList = detailPanier;
                location.reload();
            })
            .catch(this.handleError);
    }

    quantiteMoins(detailPanierId): void {
        this.panierService
            .quantiteMoins(detailPanierId)
            .then(detailPanier => {
                this.detailPanierList = detailPanier;
                location.reload();
            })
            .catch(this.handleError);
    }

    supprimerProduit(detailPanierId): void {
        this.panierService
            .supprimerProduit(detailPanierId)
            .then(detailPanier => {
                this.detailPanierList = detailPanier;
                location.reload();
            })
            .catch(this.handleError);
    }

    prixTotal(): number {
        this.detailPanierList.forEach(detailPanier =>
            this.total += detailPanier.produit.prix * detailPanier.quantite
        );
        return this.total;
    }

    quantite(): number {
        let quantiteTotale = 0;
        this.detailPanierList.forEach(detailPanier =>
            quantiteTotale += detailPanier.quantite
        );
        return quantiteTotale;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


}