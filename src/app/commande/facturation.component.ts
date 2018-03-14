import {Component, OnInit} from '@angular/core';
import {AdresseService} from '../adresse/adresse.service';
import {Adresse} from '../adresse/adresse';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {CommandeService} from './commande.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-facturation',
    templateUrl: './facturation.component.html'
})

export class FacturationComponent implements OnInit {
    idMembre: number = 1;
    adresseList: Adresse[];
    ajouterAdresseForm: FormGroup;
    nom_adresse: string;
    nom: string;
    prenom: string;
    email: string;
    adresse: string;
    code_postal: string;
    ville: string;
    pays: string;

    constructor(private formBuilder: FormBuilder, private adresseService: AdresseService,
                private commandeService: CommandeService, private router: Router) {
        this.ajouterAdresseForm = formBuilder.group({
            'nom_adresse': ['', Validators.required],
            'nom': ['', Validators.required],
            'prenom': ['', Validators.required],
            'email': ['', Validators.required],
            'adresse': ['', Validators.required],
            'code_postal': ['', Validators.required],
            'ville': ['', Validators.required],
            'pays': ['', Validators.required]
        });
    }


    ngOnInit(): void {
        this.getAdresseByMembre(this.idMembre);
    }

    getAdresseByMembre(id): void {
        this.adresseService
            .getAdresseByMembre(id)
            .then(adresse => {
                this.adresseList = adresse;
            });
    }

    validerAdresseFacturation(idAdresseFacturation) {
        this.commandeService
            .updateFacturation(idAdresseFacturation)
            .then(response => {
                    this.router.navigate(['paiement']);
            }
            );


    }


    ajouterAdresse(adresse: NgForm) {
        this.adresseService
            .creerAdresseLivraison(adresse.value)
            .then(response => {
                this.adresseList.push(response);
                // location.reload();
                // window.scrollTo(0,0);
            });
    }

}