import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {tokenNotExpired} from 'angular2-jwt';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

    constructor(private http: Http) {
    }

    authenticate(user: any) {
        const url = 'http://127.0.0.1:8000/login_check';
        const body = new URLSearchParams();
        body.append('username', user.username);
        body.append('password', user.password);
        const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        const options = new RequestOptions({headers: headers});

        return this.http
            .post(url, body.toString(), options)
            .map((data: Response) => data.json());
    }

    logout() {
        localStorage.removeItem('id_token');
    }

    loggedIn() {
        return tokenNotExpired('id_token');
    }
}