import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Famille } from './famille';
import { FamilleService } from './famille.service';


@Component({
    selector: 'familles-root',
    templateUrl: 'familles.component.html'
})

export class FamillesComponent implements OnInit {
    famillesList: Famille[];
    constructor(private familleService: FamilleService, private router: Router) { }

    ngOnInit(): void {
        this.getAllFamilles();
    }

    getAllFamilles(): void {
        console.log("essai");
        this.familleService
            .getAllFamilles()
            .then(familles => {
                this.famillesList = familles;
                console.log(this.famillesList);
            });
    }
}