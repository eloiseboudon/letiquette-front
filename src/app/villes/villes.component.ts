import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Ville } from './ville';
import { VilleService } from './ville.service';

@Component({
    selector: 'villes-root',
    templateUrl: 'villes.component.html'
})

export class VillesComponent implements OnInit {
    villesList: Ville[];
    villes: Ville[];

    constructor (private villeService: VilleService, private router: Router) { }

    ngOnInit(): void {
        this.getAllVille();
    }

    getAllVille(): void {
        this.villeService
            .getVilles()
            .then(villes => {
                this.villesList = villes;
                console.log(this.villesList);
            });
    }













}
