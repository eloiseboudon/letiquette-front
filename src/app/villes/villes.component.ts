import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Ville } from './ville';
import { VilleService } from './ville.service';


import { Pays } from '../pays/pays';
import { PaysService } from '../pays/pays.service';

@Component({
    selector: 'villes-root',
    templateUrl: 'villes.component.html'
})

export class VillesComponent implements OnInit {
    villesList: Ville[];
    villes: Ville[];
    pays:Pays[];
    paysList:Pays[];

    constructor (private villeService: VilleService, private paysService: PaysService, private router: Router) { }
    
    ngOnInit(): void {
        this.getAllVille();
        this.getAllPays();
    }

    getAllVille(): void {
        this.villeService
            .getVilles()
            .then(villes => {
                this.villesList = villes;
            });
    }
    
    getAllPays(): void {
        this.paysService
            .getAllPays()
            .then(pays => {
                this.paysList = pays;
            });  
    } 


    // create(name: string, codePostal: string, pays: Pays): void {
    //     console.log(name);
    //     console.log(codePostal);
    //     console.log(pays);
    //     this.villeService
    //     .create(name, codePostal, pays)
    //     .then(new_ville => {
    //         this.villesList.push(new_ville);
    //         console.log(this.villesList);
    //     });
    // }

















}
