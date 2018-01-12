import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'panier-root',
    templateUrl: 'panier.component.html'
})

export class PanierComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit(): void {

    }
}