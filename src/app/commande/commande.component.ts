import {Component, OnInit} from '@angular/core';
import {MembresService} from '../membres/membres.service';
import {Membres} from '../membres/membres';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AdresseService} from '../adresse/adresse.service';

@Component({
    selector: 'app-commande',
    templateUrl: './commande.component.html'
})
export class CommandeComponent implements OnInit {
    id: number = 1;
    client: Membres;

    constructor(private membreService: MembresService, private adresseService: AdresseService) {
    }

    ngOnInit(): void {
        this.getMembre(this.id);
    }

    getMembre(id): void {
        this.membreService
            .getMembre(id)
            .then(client => {
                this.client = client;
                location.reload();
            })
            .catch(this.handleError);
    }

    creerAdresseLivraison(form: NgForm) {
        this.adresseService.creerAdresseLivraison(form.value)
            .then(response => {
                return response;
            });
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}