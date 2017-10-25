import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Produit } from './produit';
import { ProduitService } from './produit.service';

import { TailleType } from '../tailleType/tailleType';
import { TailleTypeService } from '../tailleType/tailleType.service';


import { Famille } from '../familles/famille';
import { FamilleService } from '../familles/famille.service';


// import { Fournisseur } from '../fournisseurs/fournisseur';
// import { FournisseurService } from '../fournisseurs/fournisseur.service';


@Component({
    selector: 'produits-root',
    templateUrl: 'produits.component.html'
})


export class ProduitsComponent implements OnInit {
    viewFamille: Famille;
    produitsTailleList: Produit[];
    familleFilter: boolean = false;
    famillesList: Famille[];
    tailleTypeList: TailleType[];
    produitsList: Produit[];
    view:  string
    constructor (private produitService: ProduitService, private tailleTypeService: TailleTypeService, 
        private familleService: FamilleService, private router: Router) { }
    
//*************** */
// GLOBAL 
//****************/

    ngOnInit(): void {
        this.getAllProduitsFemmes();
        this.getAllTailleType();
        this.getFamilleBySexe();
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


//*************** */
// FEMMES 
//****************/

    getAllProduitsFemmes(): void {
        this.view = "Vêtements Femmes";
        this.produitService
            .getAllProduitsFemmes()
            .then(produits => {
                this.produitsList = produits;
            });
            this.getAllTailleType();
            this.familleFilter = false;
    }

    getFamilleBySexe():void{
        this.familleService
        .getFamilleBySexe("F")
        .then(famille => {
            this.famillesList = famille;
        });
    }

//*************** */
// EOF - FEMMES 
//****************/

    filterFamille(famille){
        this.getProduitByFamille(famille);
        this.getTailleTypeByFamille(famille.globalId);
        this.familleFilter = true;
    }

    getProduitByFamille(famille):void {
        this.produitService
        .getProduitByFamille(famille)
        .then(produits => {
            this.produitsList = produits;
        });
        this.view = famille.famille
        this.viewFamille = famille
    }

    filterTaille(taille){
        if(this.familleFilter){
            this.produitService
            .getProduitByTailleFamille(taille,this.viewFamille)
            .then(produits => {
                this.produitsList = produits;
            });
        }else{
            this.produitService
        .getProduitByTaille(taille)
        .then(produits => {
            this.produitsList = produits;
            });
        }
        

    }




}