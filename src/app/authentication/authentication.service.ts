import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {tokenNotExpired} from 'angular2-jwt';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    private authUrl = 'http://api.letiquette-shop.fr/auth-token';

    constructor(private http: Http) {
    }

    authenticate(user: any) {
        const body = new URLSearchParams();
        body.append('login', user.username);
        body.append('password', user.password);
        const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        const options = new RequestOptions({headers: headers});

        return this.http
            .post(this.authUrl, body.toString(), options)
            .map((data: Response) => data.json());
    }

    logout() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('id_membre');
        localStorage.removeItem('id_panier');
        //    route symfony pour destroy les sessions
    }

    loggedIn() {
        return tokenNotExpired('id_token');
    }
}