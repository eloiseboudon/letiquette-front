import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as jQuery from 'jquery';

import { Produit } from '../produits/produit';
import { ProduitFemmesService } from './produitFemmes.service';
import { ProduitService } from '../produits/produit.service';


import { TailleType } from '../tailleType/tailleType';
import { TailleTypeService } from '../tailleType/tailleType.service';


import { Famille } from '../familles/famille';
import { FamilleService } from '../familles/famille.service';



import { Fournisseur } from '../fournisseurs/fournisseur';
import { FournisseurService } from '../fournisseurs/fournisseur.service';



@Component({
    selector: 'produitsFemmes-root',
    templateUrl: 'produitsFemmes.component.html'
})


export class ProduitsFemmesComponent implements OnInit {

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

    constructor(private produitFemmesService: ProduitFemmesService, private produitService: ProduitService, private tailleTypeService: TailleTypeService,
        private familleService: FamilleService, private fournisseurService: FournisseurService,private router: Router) { }

    //*************** */
    // GLOBAL 
    //****************/

    ngOnInit(): void {
        this.getAllProduits();
        this.getAllTailleType();
        this.getFamilleBySexe();
        // this.getAllFemmesFournisseurs();
        this.rangeSlide();

        
    }
    getVals(){
        // Get slider values
        // var parent = this.parentNode;
        var slides = document.getElementsByTagName("input");
        var slide1 = parseFloat( slides[0].value );
        var slide2 = parseFloat( slides[1].value );
    
        console.log(slide1 +" "+ slide2);
        // Neither slider will clip the other, so make sure we determine which is larger
        if( slide1 > slide2 ){ var tmp = slide2; slide2 = slide1; slide1 = tmp; }
        
        var displayElement = document.getElementsByClassName("rangeValues")[0];
            displayElement.innerHTML = "$ " + slide1 + "k - $" + slide2 + "k";
      }


    rangeSlide(){
        var sliderSections = document.getElementsByClassName("range-slider");
        for (var x = 0; x < sliderSections.length; x++) {
            var sliders = sliderSections[x].getElementsByTagName("input");
            for (var y = 0; y < sliders.length; y++) {
                if (sliders[y].type === "range") {
                    sliders[y].oninput = this.getVals;
                    // Manually trigger event first time to display values
                    // sliders[y].oninput();
                }
            }
        }
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

    getAllProduits(): void {
        this.produitFemmesService
            .getAllProduits()
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

        if (this.familleFilter) {
            // this.filterAllWithFamille(this.viewFamille, this.arrayFiltresTaille, this.arrayFiltresMarque, this.prixMin, this.prixMax);
        }
        else {
            // this.filterAll(this.arrayFiltresTaille, this.arrayFiltresMarque, this.prixMin, this.prixMax);
            this.filterAll(this.arrayFiltresTaille, this.arrayFiltresMarque);
        }
    }

    filterAll(arrayTailles, arrayMarques) {

        if(arrayMarques.length==0){
            this.produitFemmesService
            .getProduitByFiltreTaille(arrayTailles)
            .then(produits => {
                this.produitsList = produits;
            });
        }
        else{
            if(arrayTailles.produitFemmesService==0){
                this.produitFemmesService
                .getProduitByFiltreMarque(arrayMarques)
                .then(produits => {
                    this.produitsList = produits;
                });
            }
            else{                
                this.produitFemmesService
                .getProduitByFiltres(arrayTailles,arrayMarques)
                .then(produits => {
                    this.produitsList = produits;
                });
            }
        }

    }
}