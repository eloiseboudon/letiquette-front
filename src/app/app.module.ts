import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TitleCasePipe} from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import {SortByPipe, UniquePipe, FilterPricePipe, FilterMarquePipe, FilterCouleurPipe, FilterTaillePipe, FilterEthiquePipe} from './pipes';
import {Http, HttpModule, RequestOptions} from '@angular/http';
import {AuthHttp, AuthConfig} from 'angular2-jwt';


import {AppComponent} from './app.component';
import {Routing} from './app.routing';
import {AuthGuard} from './_guard/index';


import {AuthenticationComponent} from './authentication/authentication.component';
import {AuthenticationService} from './authentication/authentication.service';


import {PostComponent} from './post/post.component';
import {PostRepository} from './post/post-repository.service';


import {NavbarComponent} from './nav/nav.component';
import {AccueilComponent} from './accueil/accueil.component';
import {FooterComponent} from './footer/footer.component';
import {PageNotFoundComponent} from './not-found.component';

import {PaysComponent} from './pays/pays.component';
import {PaysService} from './pays/pays.service';

import {VillesComponent} from './villes/villes.component';
import {VilleService} from './villes/ville.service';

// import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import {FournisseurService} from './fournisseurs/fournisseur.service';

import {ProduitService} from './produits/produit.service';
import {ProduitsFemmesComponent} from './produitsFemmes/produitsFemmes.component';
import {ProduitFemmesService} from './produitsFemmes/produitFemmes.service';
import {ProduitViewComponent} from './produitView/produitView.component';

import {FamilleService} from './familles/famille.service';
import {ImageService} from './image/image.service';
import {TailleTypeService} from './tailleType/tailleType.service';
import {TailleService} from './tailles/taille.service';
import {CouleurService} from './couleurs/couleur.service';
import {PointsEthiquesService} from './pointsEthiques/pointsEthiques.service';


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp(new AuthConfig({}), http, options);
}

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        NavbarComponent,
        AccueilComponent,
        FooterComponent,
        PaysComponent,
        VillesComponent,
        ProduitsFemmesComponent,
        ProduitViewComponent,
        PageNotFoundComponent,
        SortByPipe,
        UniquePipe,
        FilterPricePipe,
        FilterMarquePipe,
        FilterCouleurPipe,
        FilterTaillePipe,
        FilterEthiquePipe,
        PostComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        Routing,
        HttpModule,
        NgxPaginationModule
    ],
    providers: [
        {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, RequestOptions]
        },
        PaysService,
        VilleService,
        FournisseurService,
        FamilleService,
        CouleurService,
        ProduitService,
        PointsEthiquesService,
        ImageService,
        ProduitFemmesService,
        TailleService,
        TailleTypeService,
        AuthenticationService,
        PostRepository,
        AuthGuard,
        TitleCasePipe
    ],
    bootstrap: [AppComponent]
})


export class AppModule {
}
