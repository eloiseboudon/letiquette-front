import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import * as jQuery from 'jquery';

import {Produit} from '../produits/produit';
import {ProduitService} from '../produits/produit.service';

import {Image} from '../image/image';
import {ImageService} from '../image/image.service';


@Component({
    selector: 'produitView-root',
    templateUrl: 'produitView.component.html'
})


export class ProduitViewComponent implements OnInit {
    produit: Produit[];
    id: number;
    private sub: any;
    imageList: Image[];

    constructor(private route: ActivatedRoute, private produitService: ProduitService,
                private imageService: ImageService) {
    }

    ngOnInit(): void {

        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
        this.getProduit(this.id);
        this.getImages(this.id);
    }

    getProduit(id): void {
        this.produitService
            .getProduit(id)
            .then(produit => {
                this.produit = produit;
            })
            .catch(this.handleError);

    }


    getImages(id): void {
        this.imageService
            .getImagesByProduit(id)
            .then(image =>
                this.imageList = image)
            .catch(this.handleError);
    }

    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}