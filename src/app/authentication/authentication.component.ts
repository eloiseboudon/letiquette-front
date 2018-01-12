import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthenticationService} from './authentication.service';

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
})
export class AuthenticationComponent {
    loginForm: FormGroup;
    error: string = '';

    constructor(private formBuilder: FormBuilder,
                private authenticationService: AuthenticationService,
                private router: Router) {
        this.loginForm = formBuilder.group({
            'username': ['', Validators.required],
            'password': ['', Validators.required]
        });
    }

    onSubmit() {
        this.authenticationService
            .authenticate(this.loginForm.value)
            .subscribe(
                data => {
                    localStorage.setItem('id_token', data.value);
                    localStorage.setItem('id_membre', data.membre.id);
                    localStorage.setItem('membre_login', data.membre.login);
                },
                error => this.error = error.message
            );
    }
}