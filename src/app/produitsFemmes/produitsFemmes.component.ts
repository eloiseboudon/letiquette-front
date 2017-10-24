import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { ProduitFemmes } from './produitFemmes';
import { ProduitFemmesService } from './produitFemmes.service';

import { TailleType } from '../tailleType/tailleType';
import { TailleTypeService } from '../tailleType/tailleType.service';


import { Famille } from '../familles/famille';
import { FamilleService } from '../familles/famille.service';


// import { Fournisseur } from '../fournisseurs/fournisseur';
// import { FournisseurService } from '../fournisseurs/fournisseur.service';


@Component({
    selector: 'produitsFemmes-root',
    templateUrl: 'produitsFemmes.component.html'
})


export class ProduitsFemmesComponent implements OnInit {
    famillesList: Famille[];
    tailleTypeList: TailleType[];
    produitsList: ProduitFemmes[];
    view: string ;
    constructor (private produitService: ProduitFemmesService, private tailleTypeService: TailleTypeService, private familleService: FamilleService, private router: Router) { }
    
    ngOnInit(): void {
        this.getAllProduitsFemmes();
        this.getAllTailleType();
        this.getFamilleBySexe();
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

    getFamilleBySexe():void{
        this.familleService
        .getFamilleBySexe("F")
        .then(famille => {
            this.famillesList = famille;
        });
    }


    filter(famille){
        this.getProductByFamille(famille);
        this.getTailleTypeByFamille(famille.globalId);
    }

    getProductByFamille(famille):void {
        this.produitService
        .getProductByFamille(famille)
        .then(produits => {
            this.produitsList = produits;
        });
        this.view = famille.famille;
    }



}