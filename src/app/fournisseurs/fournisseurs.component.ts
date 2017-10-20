import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Fournisseur } from './fournisseur';
import { FournisseurService } from './fournisseur.service';


@Component({
    selector: 'fournisseurs-root',
    templateUrl: 'fournisseurs.component.html'
})


export class FournisseursComponent implements OnInit {
    fournisseursList: Fournisseur[];
    fournisseurs: Fournisseur[];

    constructor(private fournisseurService: FournisseurService, private router: Router) { }
    
    ngOnInit(): void {
        this.getAllFournisseurs();
    }  

    getAllFournisseurs(): void {
        console.log("essai");
        this.fournisseurService
            .getAllFournisseurs()
            .then(fournisseurs => {
                this.fournisseursList = fournisseurs;
                console.log(this.fournisseursList);
            });  
    }  

}