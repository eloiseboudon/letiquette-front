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
            });

    }


    prixTotal(): number {
        this.detailPanierList.forEach(detailPanier =>
            this.total += detailPanier.produit.prix * detailPanier.quantite
        );
        return this.total;
    }

}