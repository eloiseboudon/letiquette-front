import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import * as jQuery from 'jquery';
import noUiSlider from 'nouislider';
import wNumb from 'wnumb';


import {Produit} from '../produits/produit';
import {ProduitHommesService} from './produitHommes.service';
import {ProduitService} from '../produits/produit.service';


import {TailleType} from '../tailleType/tailleType';
import {TailleTypeService} from '../tailleType/tailleType.service';


import {Famille} from '../familles/famille';
import {FamilleService} from '../familles/famille.service';

import {FamilleGlobal} from '../famillesGlobal/familleGlobal';
import {FamilleGlobalService} from '../famillesGlobal/familleGlobal.service';

import {Fournisseur} from '../fournisseurs/fournisseur';
import {FournisseurService} from '../fournisseurs/fournisseur.service';
import {Couleur} from '../couleurs/couleur';
import {CouleurService} from '../couleurs/couleur.service';
import {PointsEthiques} from '../pointsEthiques/pointsEthiques';
import {PointsEthiquesService} from '../pointsEthiques/pointsEthiques.service';
import {split} from 'ts-node/dist';


@Component({
    selector: 'produitsHommes-root',
    templateUrl: 'produitsHommes.component.html'
})


export class ProduitsHommesComponent implements OnInit {

    id: string;
    fournisseurList: Fournisseur[];
    couleurList: Couleur[];
    famillesList: Famille[];
    familleGlobalList: FamilleGlobal[];
    tailleTypeList: TailleType[];
    produitsList: Produit[];
    pointsEthiquesList: PointsEthiques[];
    arrayFiltresTaille: number[] = [];
    prixMin: number;
    prixMax: number;
    p: number = 1;
    pageSize = 96;
    filterArrMarque = [];
    filterArrCouleur = [];
    filterArrTaille = [];
    filterArrEthique = [];
    tri: string = 'asc';

    page: any;


    constructor(private route: ActivatedRoute, private router: Router, private produitHommesService: ProduitHommesService, private produitService: ProduitService, private tailleTypeService: TailleTypeService,
                private familleService: FamilleService, private familleGlobalService: FamilleGlobalService, private fournisseurService: FournisseurService,
                private  couleurService: CouleurService, private pointsEthiquesService: PointsEthiquesService) {
        this.route.params.subscribe(params => {
            this.page = params.name;
            if (this.page) {
                this.pageToLoad(this.page);
            }
        });


    }


    ngOnInit(): void {
        this.prixMin = 0;
        this.prixMax = 150;

        this.getAllTailleType();
        this.getAllMarques();
        this.getAllCouleurs();
        this.getAllPointsEthiques();
        this.getProduitByFamillesGlobales();
        this.filtrePrix();
        this.goToTop();


        this.route.params.subscribe(params => {
            this.page = params.name;
            if (this.page) {
                this.pageToLoad(this.page);
            } else {
                this.getAllProduits();
            }
        });
    }


    pageToLoad(page): void {
        const pagefamille = page.split('-')[0];
        if (pagefamille === 'FG') {
            const familleglobal = page.split('-')[1];
            this.getProduitByFamilleGlobale(familleglobal);
        } else if (pagefamille === 'F') {
            const famille = page.split('-')[1];
            this.getProduitByFamille(famille);
        }
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

    getIndexOf(arr, val, prop) {
        const l = arr.length;
        let k = 0;
        for (k = 0; k < l; k = k + 1) {
            if (arr[k][prop] === val) {
                return k;
            }
        }
        return -1;
    }

    deleteFilterTaille(taille): void {
        const index = this.getIndexOf(this.tailleTypeList, taille, 'taille');
        this.tailleTypeList[index].checked = false;
        this.filterArrTaille.splice(this.filterArrTaille.indexOf(taille), 1);
    }

    deleteFilterAllTaille(): void {
        this.filterArrTaille = [];
        for (let i = 0; i < this.tailleTypeList.length; i++) {
            this.tailleTypeList[i].checked = false;
        }
    }

    deleteFilterMarque(marque): void {
        const index = this.getIndexOf(this.fournisseurList, marque, 'nom_marque');
        this.fournisseurList[index].checked = false;
        this.filterArrMarque.splice(this.filterArrMarque.indexOf(marque), 1);
    }

    deleteFilterAllMarque(): void {
        this.filterArrMarque = [];
        for (let i = 0; i < this.fournisseurList.length; i++) {
            this.fournisseurList[i].checked = false;
        }
    }

    deleteFilterCouleur(couleur): void {
        const index = this.getIndexOf(this.couleurList, couleur, 'name');
        this.couleurList[index].checked = false;
        this.filterArrCouleur.splice(this.filterArrCouleur.indexOf(couleur), 1);
    }

    deleteFilterAllCouleur(): void {
        this.filterArrCouleur = [];
        for (let i = 0; i < this.couleurList.length; i++) {
            this.couleurList[i].checked = false;
        }
    }

    deleteFilterImpact(impact): void {
        const index = this.getIndexOf(this.pointsEthiquesList, impact, 'nom_ethique');
        this.pointsEthiquesList[index].checked = false;
        this.filterArrEthique.splice(this.filterArrEthique.indexOf(impact), 1);
    }

    deleteFilterAllImpact(): void {
        this.filterArrEthique = [];
        for (let i = 0; i < this.pointsEthiquesList.length; i++) {
            this.pointsEthiquesList[i].checked = false;
        }
    }

    annulerFiltres(): void {
        this.deleteFilterAllTaille();
        this.deleteFilterAllCouleur();
        this.deleteFilterAllMarque();
        this.deleteFilterAllImpact();
    }


    getAllTailleType() {
        this.tailleTypeService
            .getAllTailleType()
            .then(tailleType => {
                this.tailleTypeList = tailleType;
            });
    }

    getTailleTypeByFamilleGlobale(id): void{
        this.tailleTypeService
            .getTailleTypeByFamilleGlobale(id)
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

    getAllCouleurs(): void {
        this.couleurService
            .getAllCouleurs()
            .then(couleur => {
                this.couleurList = couleur;
            });
    }

    getAllPointsEthiques(): void {
        this.pointsEthiquesService
            .getAllPointsEthiques()
            .then(pointsEthiques => {
                this.pointsEthiquesList = pointsEthiques;
            });
    }

    getAllProduits(): void {
        this.produitHommesService
            .getAllProduits()
            .then(produits => {
                this.produitsList = produits;
            });
        this.getAllTailleType();
        // this.arrayFiltresTaille = [];
    }


    getProduitByFamillesGlobales(): void {
        this.familleGlobalService
            .getAllFamillesGlobal()
            .then(familleGlobal => {
                this.familleGlobalList = familleGlobal;
            });
    }


    filterFamille(famille) {
        this.getProduitByFamille(famille.id);
        this.getTailleTypeByFamilleGlobale(famille.famille_global.id);
        // this.arrayFiltresTaille = [];
        for (let i = 0; i < this.famillesList.length; i++) {
            this.famillesList[i].checked = false;
        }
        famille.checked = true;
    }

    getProduitByFamille(familleGlobaleID): void {
        this.produitService
            .getProduitByFamille(familleGlobaleID)
            .then(produits => {
                this.produitsList = produits;
            });
    }


    getProduitByFamilleGlobale(familleGlobaleID): void {
        this.produitService
            .getProduitByFamilleGlobaleAndSexe(familleGlobaleID, 'M')
            .then(produits => {
                this.produitsList = produits;
            });
    }

    afficherFamille(familleGlobale): void {
        this.getFamilleByFamilleGlobalAndSexe(familleGlobale.id);
        this.getProduitByFamilleGlobale(familleGlobale.id);
        this.getTailleTypeByFamilleGlobale(familleGlobale.id);
        for (let i = 0; i < this.familleGlobalList.length; i++) {
            this.familleGlobalList[i].checked = false;
        }
        familleGlobale.checked = true;
    }


    getFamilleByFamilleGlobalAndSexe(familleGlobaleID): void {
        this.familleService
            .getFamilleByFamilleGlobalAndSexe('M', familleGlobaleID)
            .then(familles => {
                this.famillesList = familles;
            });
    }

}
