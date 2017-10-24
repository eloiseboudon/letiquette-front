import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { TailleType } from './tailleType';
import { TailleTypeService } from './tailleType.service';


@Component({
    selector: 'tailleType-root',
    templateUrl: 'tailleType.component.html'
})


export class TailleTypeComponent implements OnInit {
    tailleTypeList: TailleType[];



    constructor (private tailleTypeService: TailleTypeService, private router: Router) { }
    
    ngOnInit(): void {
        this.getAllTailleType();
    }

    getAllTailleType(): void {
        this.tailleTypeService
            .getAllTailleType()
            .then(tailleType => {
                this.tailleTypeList = tailleType;
            });
    }

}