import {Injectable} from '@angular/core';
import {Headers, Http, URLSearchParams} from '@angular/http';
import {Adresse} from './adresse';

@Injectable()
export class AdresseService {
    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    private adresseUrl = 'http://127.0.0.1:8000/adresse';  // URL to api

    constructor(private http: Http) {
    }


    creerAdresseLivraison(_adresse: any): Promise<Adresse> {
        const nom = _adresse.nom;
        const client = _adresse.client;
        const adresse = _adresse.adresse;
        const complement = _adresse.complement;
        const codePostal = _adresse.codePostal;
        const ville = _adresse.ville;
        const pays = _adresse.pays;
        const email = _adresse.email;

        const data = new URLSearchParams();
        data.append('nom', nom);
        data.append('client', client);
        data.append('email', email);
        data.append('adresse', adresse);
        data.append('complement', complement);
        data.append('codePostal', codePostal);
        data.append('ville', ville);
        data.append('pays', pays);
        data.append('email', email);

        return this.http.post(this.adresseUrl + '/livraison', data.toString(), {headers: this.headers})
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