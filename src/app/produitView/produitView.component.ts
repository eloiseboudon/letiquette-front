import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Produit} from '../produits/produit';
import {ProduitService} from '../produits/produit.service';

@Component({
    selector: 'produitView-root',
    templateUrl: 'produitView.component.html'
})


export class ProduitViewComponent implements OnInit {
    produit: Produit[];
    id: number;
    private sub: any;

    constructor(private route: ActivatedRoute, private produitService: ProduitService) {
    }

    ngOnInit(): void {

        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
        this.getProduit(this.id);
    }

    getProduit(id): void {
        this.produitService
            .getProduit(id)
            .then(produit => {
                this.produit = produit;
            })
            .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}