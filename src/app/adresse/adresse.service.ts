import {Injectable} from '@angular/core';
import {Headers, Http, URLSearchParams} from '@angular/http';
import {Adresse} from './adresse';
import {Membres} from '../membres/membres';

@Injectable()
export class AdresseService {
    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    private adresseUrl = 'http://api.letiquette-shop.fr/adresse';  // URL to api

    constructor(private http: Http) {
    }


    creerAdresseLivraison(_adresse: any): Promise<Adresse> {
        const nomAdresse = _adresse.nom_adresse;
        const nom = _adresse.nom;
        const prenom = _adresse.prenom;
        const client = '1';
        const adresse = _adresse.adresse;
        const complement = _adresse.complement;
        const codePostal = _adresse.code_postal;
        const ville = _adresse.ville;
        const pays = _adresse.pays;
        const email = _adresse.email;

        const data = new URLSearchParams();
        data.append('nomAdresse', nomAdresse);
        data.append('nom', nom);
        data.append('prenom', prenom);
        data.append('membre', client);
        data.append('email', email);
        data.append('adresse', adresse);
        data.append('complement', complement);
        data.append('codePostal', codePostal);
        data.append('ville', ville);
        data.append('pays', pays);
        data.append('email', email);

        return this.http.post(this.adresseUrl, data.toString(), {headers: this.headers})
            .toPromise()
            .then(response =>
                response.json() as any[])
            .catch(this.handleError);

    }

    getAdresseByMembre(id: number): Promise<Adresse[]> {
        return this.http.get(this.adresseUrl + '/' + id)
            .toPromise()
            .then(response =>
                response.json() as Adresse[])
            .catch(this.handleError);

    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}