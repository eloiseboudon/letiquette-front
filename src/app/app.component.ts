import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {AuthenticationService} from './authentication/authentication.service';
import {DetailPanier} from './detailPanier/detailPanier';

import {PanierService} from './panier/panier.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = 'L\'étiquette';
    quantiteTotale: number = 0;
    detailPanierList: DetailPanier[];

    constructor(private authenticationService: AuthenticationService, private router: Router, private panierService: PanierService) {
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
                this.quantite();
            })
            .catch(this.handleError);
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
