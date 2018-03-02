import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FooterService} from './footer.service';


@Component({
    selector: 'devenir_vendeur',
    templateUrl: 'devenir_vendeur.component.html'
})


export class DevenirVendeurComponent {
    devenirVendeurForm: FormGroup;
    contact: any;
    entreprise: string;
    site_internet: string;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    message: string;


    constructor(private formBuilder: FormBuilder,
                private contactService: FooterService,
                private router: Router) {
        this.devenirVendeurForm = formBuilder.group({
            'nom': ['', Validators.required],
            'prenom': ['', Validators.required],
            'email': ['', Validators.required],
            'telephone': ['', Validators.required],
            'message': ['', Validators.required]
        });
    }

    devenirVendeur(contact) {
        this.contactService
            .devenirVendeur(contact);
    }

}