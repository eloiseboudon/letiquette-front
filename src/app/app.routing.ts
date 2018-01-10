import {Routes, RouterModule} from '@angular/router';

import {AuthenticationComponent} from './authentication/authentication.component';
import {PostComponent} from './post/post.component';
import {AuthGuard} from './_guard/index';


import {PaysComponent} from './pays/pays.component';
import {VillesComponent} from './villes/villes.component';
import {ProduitViewComponent} from './produitView/produitView.component';
import {PageNotFoundComponent} from './not-found.component';
import {AccueilComponent} from './accueil/accueil.component';
import {ProduitsFemmesComponent} from './produitsFemmes/produitsFemmes.component';


const appRoutes: Routes = [
    {path: '', redirectTo: '/accueil', pathMatch: 'full'},
    {path: 'villes', component: VillesComponent},
    {path: 'accueil', component: AccueilComponent},
    {path: 'pays', component: PaysComponent},
    // { path: 'fournisseurs', component: FournisseursComponent},
    {path: 'produits/femmes', component: ProduitsFemmesComponent, canActivate: [AuthGuard]},
    {path: 'produits/:id', component: ProduitViewComponent},
    {
        path: 'login',
        component: AuthenticationComponent
    },
    {
        path: 'post',
        component: PostComponent
        // canActivate: [AuthGuard]
    },
    {path: '**', component: PageNotFoundComponent}
];


export const Routing = RouterModule.forRoot(appRoutes);
