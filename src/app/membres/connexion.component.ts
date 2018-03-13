import {Component} from '@angular/core';
import {MembresService} from './membres.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Membres} from './membres';

@Component({
    selector: 'app-connexion',
    templateUrl: './connexion.component.html'
})
export class ConnexionComponent {
    membreForm: FormGroup;
    usernamme: string;
    password: string;
    membre: Membres;

    constructor(private formBuilder: FormBuilder, private membreService: MembresService) {
        this.membreForm = formBuilder.group({
            'usernamme': ['', Validators.required],
            'password': ['', Validators.required],
        });
    }

    connexion(membre: NgForm) {
        this.membreService.connexion(membre.value)
            .then(new_membre => {
                this.membre = new_membre;
            });
    }
}