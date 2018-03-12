import {Component, OnInit} from '@angular/core';
import {VilleService} from '../villes/ville.service';
import {Ville} from '../villes/ville';
import {MembresService} from './membres.service';
import {Membres} from './membres';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
    selector: 'app-membres',
    templateUrl: './membres.component.html'
})
export class MembresComponent implements OnInit {
    villesList: Ville[];
    membreForm: FormGroup;
    civilite: string;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    password: string;
    password_verif: string;
    adresse: string;
    ville: string;
    code_postal: string;
    pays: string;


    constructor(private formBuilder: FormBuilder, private membreService: MembresService, private villeService: VilleService) {
        this.membreForm = formBuilder.group({
            'civilite': ['', Validators.required],
            'nom': ['', Validators.required],
            'prenom': ['', Validators.required],
            'email': ['', Validators.required],
            'telephone': ['', Validators.required],
            'password': ['', Validators.required],
            'password_verif': ['', Validators.required],
            'adresse': ['', Validators.required],
            'ville': ['', Validators.required],
            'code_postal': ['', Validators.required],
            'pays': ['', Validators.required]
        });

    }

    ngOnInit() {
        // this.getAllVille();
    }


    // getAllVille(): void {
    //     this.villeService
    //         .getVilles()
    //         .then(villes => {
    //             this.villesList = villes;
    //         });
    // }

    creerMembre(membre: NgForm) {
        this.membreService.creer(membre.value)
            .then(response => {
                return response;
            });
    }

}