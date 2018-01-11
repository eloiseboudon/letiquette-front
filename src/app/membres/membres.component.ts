import {Component, OnInit} from '@angular/core';
import {VilleService} from '../villes/ville.service';
import {Ville} from '../villes/ville';
import {MembresService} from './membres.service';
import {Membres} from './membres';

@Component({
    selector: 'app-membres',
    templateUrl: './membres.component.html'
})
export class MembresComponent implements OnInit {
    villesList: Ville[];
    membresList: Membres[];

    constructor(private membreService: MembresService, private villeService: VilleService) {
    }

    ngOnInit() {
        this.getAllVille();
    }


    getAllVille(): void {
        this.villeService
            .getVilles()
            .then(villes => {
                this.villesList = villes;
            });
    }


    create(nom, prenom, login, password, adresse, email, telephone, idVille): void {
        this.membreService
            .create(nom, prenom, login, password, adresse, email, telephone, idVille)
            .then(new_membre => {
                this.membresList.push(new_membre);
            });
    }
}