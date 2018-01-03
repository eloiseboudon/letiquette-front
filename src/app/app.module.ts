import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {TitleCasePipe} from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import {SortByPipe, UniquePipe, FilterPricePipe, FilterMarquePipe, FilterCouleurPipe, FilterTaillePipe, FilterEthiquePipe} from './pipes';

import {AppComponent} from './app.component';
import {NavbarComponent} from './nav/nav.component';
import {AccueilComponent} from './accueil/accueil.component';
import {FooterComponent} from './footer/footer.component';
import {PaysComponent} from './pays/pays.component';
import {VillesComponent} from './villes/villes.component';
// import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import {ProduitsFemmesComponent} from './produitsFemmes/produitsFemmes.component';
import {ProduitViewComponent} from './produitView/produitView.component';


import {PageNotFoundComponent} from './not-found.component';



import {PaysService} from './pays/pays.service';
import {VilleService} from './villes/ville.service';
import {FournisseurService} from './fournisseurs/fournisseur.service';
import {FamilleService} from './familles/famille.service';
import {ImageService} from './image/image.service';
import {ProduitService} from './produits/produit.service';
import {TailleTypeService} from './tailleType/tailleType.service';
import {TailleService} from './tailles/taille.service';
import {ProduitFemmesService} from './produitsFemmes/produitFemmes.service';
import {CouleurService} from './couleurs/couleur.service';
import {PointsEthiquesService} from './pointsEthiques/pointsEthiques.service';


const appRoutes: Routes = [
    {path: '', redirectTo: '/accueil', pathMatch: 'full'},
    {path: 'villes', component: VillesComponent},
    {path: 'accueil', component: AccueilComponent},
    {path: 'pays', component: PaysComponent},
    // { path: 'fournisseurs', component: FournisseursComponent},
    {path: 'produits/femmes', component: ProduitsFemmesComponent},
    {path: 'produits/:id', component: ProduitViewComponent},

    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        AccueilComponent,
        FooterComponent,
        PaysComponent,
        VillesComponent,
        ProduitsFemmesComponent,
        ProduitViewComponent,
        PageNotFoundComponent,
        SortByPipe,
        UniquePipe, FilterPricePipe, FilterMarquePipe, FilterCouleurPipe, FilterTaillePipe,FilterEthiquePipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true}),
        HttpModule,
        NgxPaginationModule
    ],
    providers: [
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
        TitleCasePipe
    ],
    bootstrap: [AppComponent]
})


export class AppModule {
}
