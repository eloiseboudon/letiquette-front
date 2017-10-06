import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';


import { Ville } from './ville';
import { VilleService } from './ville.service';

@Component({
    selector: 'villes-root',
    templateUrl: 'villes.component.html'
})

export class VillesComponent implements OnInit {
    villes: Ville[];
    selectedVille: Ville;

    constructor (private http: Http){}

    ngOnInit(){
        this.http.get("http://127.0.0.1:8000/villes").subscribe(
            (res: Response) => {
                this.villes = res.json();               
            }
        )
    }
}
