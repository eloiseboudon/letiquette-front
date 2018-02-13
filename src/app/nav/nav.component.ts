import {Component, OnInit, Output} from '@angular/core';
import * as jQuery from 'jquery';
import {AuthenticationService} from '../authentication/authentication.service';
import {Router} from '@angular/router';
import {PanierService} from '../panier/panier.service';
import {DetailPanier} from '../detailPanier/detailPanier';


@Component({
    moduleId: module.id,
    selector: 'ng-nav',
    templateUrl: 'nav.component.html'
})

export class NavbarComponent implements OnInit {
    membre_nom: string;
    quantiteTotale: number = 0;
    detailPanierList: DetailPanier[];

    constructor(private authenticationService: AuthenticationService, private panierService: PanierService, private router: Router) {
    }


    ngOnInit(): void {
        this.getProduitsPanier();

        if (this.hasAuthToken()) {
            this.setLogin();
        }

        $(window).scroll(function () {
            if (window.innerWidth > 1260) {
                if ($(this).scrollTop() > 120) {
                    document.getElementById('top-page-scroll').style.visibility = 'visible';
                    document.getElementById('top-barre').style.visibility = 'hidden';
                    document.getElementById('top-barre').style.position = 'static';
                }
                else {
                    document.getElementById('top-barre').style.position = 'static';
                    document.getElementById('top-page-scroll').style.visibility = 'hidden';
                    document.getElementById('top-barre').style.visibility = 'visible';
                }
            } else {

                document.getElementById('top-barre').style.position = 'fixed';
                document.getElementById('top-page-scroll').style.visibility = 'hidden';
                document.getElementById('top-barre').style.visibility = 'visible';
            }

        });

        $(window).resize(function () {
            if (window.innerWidth > 1260) {
                if ($(this).scrollTop() > 120) {
                    document.getElementById('top-page-scroll').style.visibility = 'visible';
                    document.getElementById('top-barre').style.visibility = 'hidden';
                    document.getElementById('top-barre').style.position = 'static';
                }
                else {
                    document.getElementById('top-barre').style.position = 'static';
                    document.getElementById('top-page-scroll').style.visibility = 'hidden';
                    document.getElementById('top-barre').style.visibility = 'visible';
                }
            } else {

                document.getElementById('top-barre').style.position = 'static';
                document.getElementById('top-page-scroll').style.visibility = 'hidden';
                document.getElementById('top-barre').style.visibility = 'visible';
            }

        });

        $('#top-icon').click(function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar');
        });

        $('#global-cache').click(function (e) {
            $('body').removeClass('sidebar');
        });

        $(window).click(function (event) {
            if (!event.target.matches('.dropbtn')) {
                const dropdowns = document.getElementsByClassName('dropdown-content');
                let i;
                for (i = 0; i < dropdowns.length; i++) {
                    const openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        });
    }

    hasAuthToken() {
        return localStorage.getItem('id_token') !== null;
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['accueil']);
    }

    setLogin() {
        this.membre_nom = localStorage.getItem('membre_login');
    }

    dropdown() {
        document.getElementById('myDropdown').classList.toggle('show');
    }

    getProduitsPanier(): void {
        this.panierService
            .getProduitPanier()
            .then(async detailPanier => {
                this.detailPanierList = detailPanier;
                await this.detailPanierList;
                this.quantite();
            })
            .catch(this.handleError);
    }


    quantite(): number {
        this.detailPanierList.forEach(detailPanier =>
            this.quantiteTotale += detailPanier.quantite
        );
        return this.quantiteTotale;
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
