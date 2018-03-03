import {Component} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {NavigationEnd, Router} from '@angular/router';
import {FooterService} from './footer.service';


@Component({
    selector: 'contactez_nous',
    templateUrl: 'contactez_nous.component.html'
})

export class ContactComponent {
    contactForm: FormGroup;
    demande: string;
    informations_generales: string;
    renseignement_article: string;
    statut_livraison: string;
    annulation_commande: string;
    retour_article: string;
    recep_article_non_conforme: string;
    problemes_techniques: string;
    partenariats_offres_services: string;
    modif_adresse_livraison: string;
    gestion_newslettes: string;
    utlisation_coupons: string;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    num_commande: string;
    message: string;
    civilite: string;
    contact: any;
    H: string;
    F: string;
    A: string;

    constructor(private formBuilder: FormBuilder,
                private footerService: FooterService,
                private router: Router) {
        this.contactForm = formBuilder.group({
            'civilite': ['', Validators.required],
            'nom': ['', Validators.required],
            'prenom': ['', Validators.required],
            'email': ['', Validators.required],
            'telephone': ['', Validators.required],
            'demande': ['', Validators.required],
            'num_commande': ['', Validators.required],
            'message': ['', Validators.required]
        });
    }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }



    contactezNous(contact: NgForm) {
        this.footerService
            .contactezNous(contact.value)
            .then(response => {
                return response;
            });
    }


}
