import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Produit } from './produit';
import { ProduitService } from './produit.service';


// import { Famille } from '../familles/famille';
// import { FamilleService } from '../familles/famille.service';
// import { Fournisseur } from '../fournisseurs/fournisseur';
// import { FournisseurService } from '../fournisseurs/fournisseur.service';


@Component({
    selector: 'produits-root',
    templateUrl: 'produits.component.html'
})


export class ProduitsComponent implements OnInit {
    produitsList: Produit[];


    constructor (private produitService: ProduitService, private router: Router) { }
    
    ngOnInit(): void {
        this.getAllProduits();
    }

    getAllProduits(): void {
        this.produitService
            .getAllProduits()
            .then(produits => {
                this.produitsList = produits;
            });
    }

}