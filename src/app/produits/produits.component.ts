import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

    produitsTailleList: Produit[];
    familleFilter: boolean = false;
    famillesList: Famille[];
    tailleTypeList: TailleType[];
    produitsList: Produit[];
    view: string;
    viewFamille: Famille;
    arrayFiltresTaille: number[] = [];
    arrayFiltresMarque: number[] = [];
    arrayFiltresMatiere: number[] = [];
    prixMin: number;
    prixMax: number;

    constructor(private produitService: ProduitService, private tailleTypeService: TailleTypeService,
        private familleService: FamilleService, private router: Router) { }

    //*************** */
    // GLOBAL 
    //****************/

    ngOnInit(): void {
        this.getAllProduitsFemmes();
        this.getAllTailleType();
        this.getFamilleBySexe();
    }


    getAllTailleType() {
        this.tailleTypeService
            .getAllTailleType()
            .then(tailleType => {
                this.tailleTypeList = tailleType;
            });
    }

    getTailleTypeByFamille(id): void {
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
        this.produitService
            .getAllProduitsFemmes()
            .then(produits => {
                this.produitsList = produits;
            });
        this.view = "Vêtements Femmes";
        this.getAllTailleType();
        this.familleFilter = false;
        this.arrayFiltresTaille = [];
    }

    getFamilleBySexe(): void {
        this.familleService
            .getFamilleBySexe("F")
            .then(famille => {
                this.famillesList = famille;
            });
    }

    //*************** */
    // EOF - FEMMES 
    //****************/

    filterFamille(famille) {
        this.getProduitByFamille(famille);
        this.getTailleTypeByFamille(famille.globalId);
        this.familleFilter = true;
        this.arrayFiltresTaille = [];
    }

    getProduitByFamille(famille): void {
        this.produitService
            .getProduitByFamille(famille)
            .then(produits => {
                this.produitsList = produits;
            });
        this.view = famille.famille
        this.viewFamille = famille
    }

    filterTaille(taille) {
        this.arrayFiltresTaille.push(taille.id);
        console.log(this.arrayFiltresTaille);

        if (this.familleFilter) {
            // this.filterAllWithFamille(this.viewFamille, this.arrayFiltresTaille, this.arrayFiltresMarque, this.prixMin, this.prixMax);
        }
        else {
            // this.filterAll(this.arrayFiltresTaille, this.arrayFiltresMarque, this.prixMin, this.prixMax);
            this.filterAll(this.arrayFiltresTaille, this.arrayFiltresMarque, this.prixMin, this.prixMax);
        }


        // }


    }


    filterAll(arrayTailles, arrayMarques, prixMin, prixMax) {
        this.produitService
        .getProduitByFiltres(arrayTailles)
        .then(produits => {
            this.produitsList = produits;
        });

    }




}