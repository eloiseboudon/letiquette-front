import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import {NavigationEnd, Router} from '@angular/router';
import {FooterService} from './footer.service';


@Component({
    selector: 'devenir_vendeur',
    templateUrl: 'devenir_vendeur.component.html'
})


export class DevenirVendeurComponent implements OnInit {
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
                private footerService: FooterService,
                private router: Router) {
        this.devenirVendeurForm = formBuilder.group({
            'nom': ['', Validators.required],
            'prenom': ['', Validators.required],
            'email': ['', Validators.required],
            'telephone': ['', Validators.required],
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
        this.goToTop();
    }


    goToTop(): void {
        $(window).scroll(function () {
            const posScroll = $(document).scrollTop();
            if (posScroll >= 180) {
                document.getElementById('top_link').style.display = 'block';
            } else {
                document.getElementById('top_link').style.display = 'none';
            }
        });
    }

    scroll(): void {
        window.scrollTo(0, 0);
    }

    devenirVendeur(contact: NgForm) {
        this.footerService
            .devenirVendeur(contact.value)
            .then(response => {
                return response;
            });
    }

}