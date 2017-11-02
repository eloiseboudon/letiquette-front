import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination'; 


import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/nav.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { PaysComponent } from './pays/pays.component';
import { VillesComponent } from './villes/villes.component';
// import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { ProduitsFemmesComponent } from './produitsFemmes/produitsFemmes.component';


import { PageNotFoundComponent } from './not-found.component';
import { SortByPipe, UniquePipe, FilterPricePipe } from './pipes';

import { PaysService } from './pays/pays.service';
import { VilleService } from './villes/ville.service';
import { FournisseurService } from './fournisseurs/fournisseur.service';
import { FamilleService } from './familles/famille.service';
import { ProduitService } from './produits/produit.service';
import { TailleTypeService } from './tailleType/tailleType.service';
import { ProduitFemmesService } from './produitsFemmes/produitFemmes.service';



const appRoutes: Routes = [
  
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'villes', component: VillesComponent},
  { path: 'accueil', component: AccueilComponent},
  { path: 'pays', component: PaysComponent},
  // { path: 'fournisseurs', component: FournisseursComponent},
  { path: 'produits/femmes', component: ProduitsFemmesComponent},

  { path: '**', component: PageNotFoundComponent }
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
    PageNotFoundComponent,
    // LibellePipe, 
    SortByPipe, 
    UniquePipe, FilterPricePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    ),
    HttpModule,
    NgxPaginationModule
  ],
  providers: [
    PaysService,
    VilleService,
    FournisseurService,
    FamilleService,
    ProduitService,
    ProduitFemmesService,
    TailleTypeService,
    TitleCasePipe
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }
