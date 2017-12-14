import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import * as jQuery from 'jquery';
import noUiSlider from 'nouislider';
import wNumb from 'wnumb';


import {Produit} from '../produits/produit';
import {ProduitFemmesService} from './produitFemmes.service';
import {ProduitService} from '../produits/produit.service';


import {TailleType} from '../tailleType/tailleType';
import {TailleTypeService} from '../tailleType/tailleType.service';


import {Famille} from '../familles/famille';
import {FamilleService} from '../familles/famille.service';


import {Fournisseur} from '../fournisseurs/fournisseur';
import {FournisseurService} from '../fournisseurs/fournisseur.service';


@Component({
    selector: 'produitsFemmes-root',
    templateUrl: 'produitsFemmes.component.html'
})


export class ProduitsFemmesComponent implements OnInit {
    fournisseurList: Fournisseur[];
    produitsTailleList: Produit[];
    familleFilter: boolean = false;
    famillesList: Famille[];
    tailleTypeList: TailleType[];
    produitsList: Produit[];
    view: string;
    viewFamille: Famille;
    arrayFiltresTaille: number[] = [];
    arrayFiltresMatiere: number[] = [];
    prixMin: number;
    prixMax: number;
    p: number = 1;
    pageSize = 4;

    constructor(private produitFemmesService: ProduitFemmesService, private produitService: ProduitService, private tailleTypeService: TailleTypeService,
                private familleService: FamilleService, private fournisseurService: FournisseurService, private router: Router) {
    }

    ngOnInit(): void {
        this.prixMin = 0;
        this.prixMax = 150;
        this.getAllProduits();
        this.getAllTailleType();
        this.getAllMarques();
        this.getFamilleBySexe();
        this.filtrePrix();
        this.goToTop();
    }


    filtrePrix(): void {

        const skipSlider = document.getElementById('skipstep') as noUiSlider.Instance;


        noUiSlider.create(skipSlider, {
            start: [this.prixMin, this.prixMax],
            tooltips: true,
            range: {
                'min': [this.prixMin],
                'max': [this.prixMax],
            },
            step: 1,
            format: wNumb({
                decimals: 0
            })
        });

        const skipValues = [
            document.getElementById('skip-value-lower'),
            document.getElementById('skip-value-upper')
        ];

        skipSlider.noUiSlider.on('update', function (values, handle) {
            skipValues[handle].innerHTML = values[handle];

        });
    }

    goToTop(): void {
        $(window).scroll(function () {
            const posScroll = $(document).scrollTop();
            if (posScroll >= 180) {
                $('.top_link').fadeIn(600);
            } else {
                $('.top_link').fadeOut(600);
            }
        });
    }

    scroll(): void {
        window.scrollTo(0, 0);
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


    getAllMarques(): void {
        this.fournisseurService
            .getAllFournisseurs()
            .then(fournisseur => {
                this.fournisseurList = fournisseur;
            });
    }

    getAllProduits(): void {
        this.produitFemmesService
            .getAllProduits()
            .then(produits => {
                this.produitsList = produits;
            });
        this.view = 'Vêtements Femmes';
        this.getAllTailleType();
        this.familleFilter = false;
        this.arrayFiltresTaille = [];
    }



    getFamilleBySexe(): void {
        this.familleService
            .getFamilleBySexe('F')
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
        this.view = famille.famille;
        this.viewFamille = famille;
    }

    filterTaille(taille) {
        if (!taille.isActive) {
            taille.isActive = true;
            this.arrayFiltresTaille.push(taille.id);
        } else {
            taille.isActive = false;
            // const index: number = this.arrayFiltresMarque.indexOf(taille.id);
            // this.arrayFiltresTaille.splice(index, 1);
        }

        if (this.familleFilter) {
            // this.filterAllWithFamille(this.viewFamille, this.arrayFiltresTaille, this.arrayFiltresMarque, this.prixMin, this.prixMax);
        } else {
            // this.filterAll(this.arrayFiltresTaille, this.arrayFiltresMarque, this.prixMin, this.prixMax);
            // this.filterAll(this.arrayFiltresTaille, this.arrayFiltresMarque);
        }
    }


    // filterAll(arrayTailles, arrayMarques) {
    //     if (arrayMarques.length === 0 && arrayTailles.length === 0) {
    //         this.produitFemmesService
    //             .getAllProduits()
    //             .then(produits => {
    //                 this.produitsList = produits;
    //             });
    //     } else {
    //         if (arrayMarques.length === 0) {
    //             this.produitFemmesService
    //                 .getProduitByFiltreTaille(arrayTailles)
    //                 .then(produits => {
    //                     this.produitsList = produits;
    //                 });
    //         } else {
    //             if (arrayTailles.length === 0) {
    //                 this.produitFemmesService
    //                     .getProduitByFiltreMarque(arrayMarques)
    //                     .then(produits => {
    //                         this.produitsList = produits;
    //                     });
    //             } else {
    //                 this.produitFemmesService
    //                     .getProduitByFiltres(arrayTailles, arrayMarques)
    //                     .then(produits => {
    //                         this.produitsList = produits;
    //                     });
    //             }
    //         }
    //
    //     }
    // }


}