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
    // checkbox: boolean =true;
    view: string ;
    constructor (private produitService: ProduitService, private router: Router) { }
    
    ngOnInit(): void {
        this.getAllProduitsFemmes();
    }

    getAllProduitsFemmes(): void {
        this.view= "Vêtements Femmes";
        this.produitService
            .getAllProduitsFemmes()
            .then(produits => {
                this.produitsList = produits;
            });
    }

    getProductByFamille(famille):void {
        this.view = famille;
        this.produitService
        .getProductByFamille(famille)
        .then(produits => {
            this.produitsList = produits;
        });

        this.view = famille;

    }


    filterTop(){
        this.getProductByFamille("Top");
    }
    
    filterVestes(){
        this.getProductByFamille("Vestes");

    }
}