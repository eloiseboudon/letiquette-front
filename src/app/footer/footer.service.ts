import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {parseHttpResponse} from 'selenium-webdriver/http';


@Injectable()
export class FooterService {
    private contactUrl = 'assets/email/contact.php';
    private devenirVendeurUrl = 'assets/email/devenir_vendeur.php';

    constructor(private http: Http) {
    }

    contactezNous(contact: any) {
        alert(contact);
        return this.http.post(this.contactUrl, contact)
            .toPromise()
            .then(response => {

                return response;
            })
            .catch(this.handleError);
    }

    devenirVendeur(contact: any) {
        return this.http.post(this.devenirVendeurUrl, contact)
            .toPromise()
            .then(response => {
                return response;
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}