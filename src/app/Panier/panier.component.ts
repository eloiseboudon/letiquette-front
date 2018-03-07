import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {PanierService} from './panier.service';
import {DetailPanier} from '../detailPanier/detailPanier';
import {forEach} from '@angular/router/src/utils/collection';
import {overrideOptions} from '@angular/cli/utilities/override-options';

@Component({
    selector: 'panier-root',
    templateUrl: 'panier.component.html'
})

export class PanierComponent implements OnInit {
    detailPanierList: DetailPanier[];
    total: number = 0;
    quantiteTotale: number = 0;
    content: string;
    style: string;
    dismissed: boolean = false;

    constructor(private panierService: PanierService, private router: Router, content, style) {
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
                this.quantite();
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
        this.detailPanierList.forEach(detailPanier =>
            this.quantiteTotale += detailPanier.quantite
        );
        return this.quantiteTotale;
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


}