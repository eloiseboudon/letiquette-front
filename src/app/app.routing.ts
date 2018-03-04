import {Routes, RouterModule} from '@angular/router';

import {AuthenticationComponent} from './authentication/authentication.component';
// import {AuthGuard} from './_guard/index';


import {PaysComponent} from './pays/pays.component';
import {VillesComponent} from './villes/villes.component';
import {ProduitViewComponent} from './produitView/produitView.component';
import {PageNotFoundComponent} from './not-found.component';
import {AccueilComponent} from './accueil/accueil.component';
import {ProduitsFemmesComponent} from './produitsFemmes/produitsFemmes.component';
import {ProduitsHommesComponent} from './produitsHommes/produitsHommes.component';
import {MembresComponent} from './membres/membres.component';
import {PanierComponent} from './panier/panier.component';
import {FaqComponent} from './footer/faq.component';
import {LivraisonRetourComponent} from './footer/livraison_retour.component';
import {ContactComponent} from './footer/contactez_nous.component';
import {DevenirVendeurComponent} from './footer/devenir_vendeur.component';
import {LequipeComponent} from './footer/lequipe.component';
import {NosValeursComponent} from './footer/nos_valeurs.component';
import {CGVComponent} from './footer/cgv.component';
import {MentionsLegalesComponent} from './footer/mentions_legales.component';
import {CGUComponent} from './footer/cgu.component';
import {PaiementsSecurisesComponent} from './footer/paiements_securises.component';
import {CookiesComponent} from './footer/cookies.component';


const appRoutes: Routes = [
    {path: '', redirectTo: '/accueil', pathMatch: 'full'},
    {path: 'villes', component: VillesComponent},
    {path: 'accueil', component: AccueilComponent},
    {path: 'pays', component: PaysComponent},
    {path: 'membres', component: MembresComponent},
    // { path: 'fournisseurs', component: FournisseursComponent},
    {path: 'produits/femmes', component: ProduitsFemmesComponent},
    {path: 'produits/hommes', component: ProduitsHommesComponent},
    {path: 'produits/femmes/:name', component: ProduitsFemmesComponent},
    {path: 'produits/hommes/:name', component: ProduitsHommesComponent},
    {path: 'produit/:id', component: ProduitViewComponent},
    {path: 'login', component: AuthenticationComponent},
    {path: 'panier', component: PanierComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'livraison_retour', component: LivraisonRetourComponent},
    {path: 'contactez_nous', component: ContactComponent},
    {path: 'devenir_vendeur', component: DevenirVendeurComponent},
    {path: 'lequipe', component: LequipeComponent},
    {path: 'nos_valeurs', component: NosValeursComponent},
    {path: 'cgv', component: CGVComponent},
    {path: 'cgu', component: CGUComponent},
    {path: 'mentions_legales', component: MentionsLegalesComponent},
    {path: 'paiements_securises', component: PaiementsSecurisesComponent},
    {path: 'cookies', component: CookiesComponent},
    // {
    //     path: 'post',
    //     component: PostComponent
    //     // canActivate: [AuthGuard]
    // },
    {path: '**', component: PageNotFoundComponent}
];


export const Routing = RouterModule.forRoot(appRoutes, { useHash: true });
