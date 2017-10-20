import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pays } from './pays';
import { PaysService } from './pays.service';

@Component({
    selector: 'pays-root',
    templateUrl: 'pays.component.html'
})

export class PaysComponent implements OnInit {
    paysList: Pays[];

    constructor(private paysService: PaysService, private router: Router) { }

    ngOnInit(): void {
        this.getAllPays();
    }  

    getAllPays(): void {
        console.log("essai");
        this.paysService
            .getAllPays()
            .then(pays => {
                this.paysList = pays;
                console.log(this.paysList);
            });  
    }  
    
    create(name: string): void{
        name = name.trim();
        if (!name) { return; }

        this.paysService.create(name)
            .then(new_pays => {
            this.paysList.push(new_pays);
            console.log(this.paysList);
        });
    }
}
