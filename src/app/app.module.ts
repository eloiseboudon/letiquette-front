import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/nav.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { PaysComponent } from './pays/pays.component';
import { VillesComponent } from './villes/villes.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';

import { PageNotFoundComponent } from './not-found.component';

import { PaysService } from './pays/pays.service';
import { VilleService } from './villes/ville.service';
import { FournisseurService } from './fournisseurs/fournisseur.service';


const appRoutes: Routes = [
  { path: 'villes', component: VillesComponent},
  { path: 'accueil', component: AccueilComponent},
  { path: 'pays', component: PaysComponent},
  { path: 'fournisseurs', component: FournisseursComponent},

  { path: '**', component: PageNotFoundComponent },
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilComponent,
    FooterComponent,
    PaysComponent,
    VillesComponent,
    FournisseursComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    ),
    HttpModule
  ],
  providers: [
    PaysService,
    VilleService,
    FournisseurService
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }
