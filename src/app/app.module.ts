import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TitleCasePipe} from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import {
    SortByPipe,
    UniquePipe,
    UniqueTaillePipe,
    FilterPricePipe,
    FilterMarquePipe,
    FilterCouleurPipe,
    FilterTaillePipe,
    FilterEthiquePipe
} from './pipes';
import {Http, HttpModule, RequestOptions} from '@angular/http';


import {AppComponent} from './app.component';
import {Routing} from './app.routing';


import {AuthenticationComponent} from './authentication/authentication.component';
import {AuthenticationService} from './authentication/authentication.service';

import {MembresComponent} from './membres/membres.component';
import {MembresService} from './membres/membres.service';

import {NavbarComponent} from './nav/nav.component';
import {AccueilComponent} from './accueil/accueil.component';
import {FooterComponent} from './footer/footer.component';
import {PageNotFoundComponent} from './not-found.component';

import {PaysComponent} from './pays/pays.component';
import {PaysService} from './pays/pays.service';

import {VillesComponent} from './villes/villes.component';
import {VilleService} from './villes/ville.service';

import {FournisseurService} from './fournisseurs/fournisseur.service';

import {ProduitService} from './produits/produit.service';
import {ProduitsFemmesComponent} from './produitsFemmes/produitsFemmes.component';
import {ProduitFemmesService} from './produitsFemmes/produitFemmes.service';

import {ProduitsHommesComponent} from './produitsHommes/produitsHommes.component';
import {ProduitHommesService} from './produitsHommes/produitHommes.service';

import {ProduitViewComponent} from './produitView/produitView.component';

import {PanierComponent} from './panier/panier.component';
import {PanierService} from './panier/panier.service';

import {WishlistComponent} from './wishlist/wishlist.component';
import {WishlistService} from './wishlist/wishlist.service';

import {FamilleService} from './familles/famille.service';
import {FamilleGlobalService} from './famillesGlobal/familleGlobal.service';
import {ImageService} from './image/image.service';
import {TailleTypeService} from './tailleType/tailleType.service';
import {TailleService} from './tailles/taille.service';
import {CouleurService} from './couleurs/couleur.service';
import {PointsEthiquesService} from './pointsEthiques/pointsEthiques.service';
import {DeclinaisonEthiqueService} from './declinaisonEthique/declinaisonEthique.service';

import {FaqComponent} from './footer/faq.component';
import {LivraisonRetourComponent} from './footer/livraison_retour.component';
import {ContactComponent} from './footer/contactez_nous.component';
import {FooterService} from './footer/footer.service';
import {LequipeComponent} from './footer/lequipe.component';
import {DevenirVendeurComponent} from './footer/devenir_vendeur.component';
import {NosValeursComponent} from './footer/nos_valeurs.component';
import {CGVComponent} from './footer/cgv.component';
import {CGUComponent} from './footer/cgu.component';
import {MentionsLegalesComponent} from './footer/mentions_legales.component';
import {PaiementsSecurisesComponent} from './footer/paiements_securises.component';
import {CookiesComponent} from './footer/cookies.component';


import {ProduitSearchComponent} from './produitRecherche/produitSearch.component';



// export function authHttpServiceFactory(http: Http, options: RequestOptions) {
//     return new AuthHttp(new AuthConfig({}), http, options);
// }

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
        ProduitsHommesComponent,
        ProduitViewComponent,
        PageNotFoundComponent,
        UniquePipe,
        UniqueTaillePipe,
        SortByPipe,
        FilterPricePipe,
        FilterMarquePipe,
        FilterCouleurPipe,
        FilterTaillePipe,
        FilterEthiquePipe,
        MembresComponent,
        PanierComponent,
        WishlistComponent,
        ProduitSearchComponent,
        FaqComponent,
        LivraisonRetourComponent,
        ContactComponent,
        DevenirVendeurComponent,
        LequipeComponent,
        NosValeursComponent, CGVComponent,
        CGUComponent,
        MentionsLegalesComponent,
        PaiementsSecurisesComponent,
        CookiesComponent
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
        // {
        //     provide: AuthHttp,
        //     useFactory: authHttpServiceFactory,
        //     deps: [Http, RequestOptions]
        // },
        PaysService,
        VilleService,
        FournisseurService,
        FamilleService,
        FamilleGlobalService,
        CouleurService,
        DeclinaisonEthiqueService,
        ProduitService,
        PointsEthiquesService,
        ImageService,
        ProduitFemmesService,
        ProduitHommesService,
        TailleService,
        TailleTypeService,
        AuthenticationService,
        // AuthGuard,
        MembresService,
        PanierService,
        WishlistService,
        TitleCasePipe,
        FooterService
    ],
    bootstrap: [AppComponent]
})


export class AppModule {
}
