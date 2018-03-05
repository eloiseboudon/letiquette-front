import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Produit} from '../produits/produit';
import {ProduitService} from '../produits/produit.service';

@Component({
    selector: 'search-root',
    templateUrl: 'produitSearch.component.html'
})


export class ProduitSearchComponent implements OnInit {

    search: any;
    produitSearchList: Produit[];

    constructor(private router: Router, private route: ActivatedRoute, private produitService: ProduitService) {
        this.route.params.subscribe(params => {
            this.search = params.search;
            this.searchProduit(this.search);

        });
    }

    ngOnInit(): void {
        this.searchProduit(this.search);
    }

    searchProduit(search): void {
        this.produitService
            .search(search)
            .then(produitSearch => {
                this.produitSearchList = produitSearch;
                console.log(this.produitSearchList);
            });
    }


}