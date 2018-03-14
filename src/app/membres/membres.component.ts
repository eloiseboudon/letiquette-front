import {Component} from '@angular/core';
import {MembresService} from './membres.service';
import {Membres} from './membres';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
    selector: 'app-membres',
    templateUrl: './membres.component.html'
})
export class MembresComponent {
    inscriptionForm: FormGroup;
    civilite: string;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    password: string;
    password_verif: string;
    connexionForm: FormGroup;
    usernamme: string;
    membre: Membres;

    constructor(private formBuilder: FormBuilder, private membreService: MembresService) {
        this.inscriptionForm = formBuilder.group({
            'civilite': ['', Validators.required],
            'nom': ['', Validators.required],
            'prenom': ['', Validators.required],
            'email': ['', Validators.required],
            'telephone': ['', Validators.required],
            'password': ['', Validators.required],
            'password_verif': ['', Validators.required]

        });

        this.connexionForm = formBuilder.group({
            'usernamme': ['', Validators.required],
            'password': ['', Validators.required],
        });

    }


    creerMembre(membre: NgForm) {
        this.membreService.creer(membre.value)
            .then(response => {
                return response;
            });
    }


    connexion(membre: NgForm) {
        this.membreService.connexion(membre.value)
            .then(new_membre => {
                this.membre = new_membre;
            });
    }

}