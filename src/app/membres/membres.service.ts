import {Injectable} from '@angular/core';
import {Headers, Http, URLSearchParams} from '@angular/http';
import {Membres} from './membres';

import 'rxjs/add/operator/toPromise';
import {Panier} from '../Panier/panier';

@Injectable()
export class MembresService {
    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    private membresURL = 'http://127.0.0.1:8000/membres';  // URL to api

    constructor(private http: Http) {
    }

    creer(membre: any): Promise<Membres> {
        const civilite = membre.civilite;
        const nom = membre.nom;
        const prenom = membre.prenom;
        const email = membre.email;
        const telephone = membre.telephone;
        const password = membre.password;
        const password_verif = membre.password_verif;
        const adresse = membre.adresse;
        const ville = membre.ville;
        const code_postal = membre.code_postal;
        const pays = membre.pays;


        const dataMembres = new URLSearchParams();
        dataMembres.append('civilite', civilite);
        dataMembres.append('nom', nom);
        dataMembres.append('prenom', prenom);
        dataMembres.append('email', email);
        dataMembres.append('telephone', telephone);
        dataMembres.append('password', password);
        dataMembres.append('password_verif', password_verif);
        dataMembres.append('adresse', adresse);
        dataMembres.append('ville', ville);
        dataMembres.append('code_postal', code_postal);
        dataMembres.append('pays', pays);

        return this.http.post(this.membresURL + '/creerUser', dataMembres.toString(), {headers: this.headers})
            .toPromise()
            .then(response =>
                response.json() as any[])
            .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
