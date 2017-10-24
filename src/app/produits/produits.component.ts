import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Produit } from './produit';
import { ProduitService } from './produit.service';

import { TailleType } from '../tailleType/tailleType';
import { TailleTypeService } from '../tailleType/tailleType.service';


// import { Famille } from '../familles/famille';
// import { FamilleService } from '../familles/famille.service';
// import { Fournisseur } from '../fournisseurs/fournisseur';
// import { FournisseurService } from '../fournisseurs/fournisseur.service';


@Component({
    selector: 'produits-root',
    templateUrl: 'produits.component.html'
})


export class ProduitsComponent implements OnInit {
    tailleTypeList: TailleType[];
    produitsList: Produit[];
    view: string ;
    constructor (private produitService: ProduitService, private tailleTypeService: TailleTypeService, private router: Router) { }
    
    ngOnInit(): void {
        this.getAllProduitsFemmes();
        this.getAllTailleType();
    }

    getAllProduitsFemmes(): void {
        this.view= "Vêtements Femmes";
        this.produitService
            .getAllProduitsFemmes()
            .then(produits => {
                this.produitsList = produits;
            });
            this.getAllTailleType();
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

    getAllTailleType(){
        this.tailleTypeService
        .getAllTailleType()
        .then(tailleType => {
            this.tailleTypeList = tailleType;
        });
    }

    getTailleTypeByFamille(id):void{
        this.tailleTypeService
        .getTailleTypeByFamille(id)
        .then(tailleType => {
            this.tailleTypeList = tailleType;
        });
    }

    filterTop(){
        this.getProductByFamille("Top");
        this.getTailleTypeByFamille(1);
    }
    
    filterVestes(){
        this.getProductByFamille("Vestes");

    }
}