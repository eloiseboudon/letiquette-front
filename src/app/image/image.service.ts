import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Image } from './image';

@Injectable()
export class ImageService {

    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    private imageUrl = 'http://api.letiquette-shop.fr/images';

    constructor(private http: Http) { }

    getImagesByProduit(id: number): Promise<Image[]> {
        return this.http.get(this.imageUrl + '/produit/' + id )
            .toPromise()
            .then(response =>
                response.json() as Image[])
            .catch(this.handleError);
    }

    getImageById(id:number): Promise<Image> {
        return this.http.get(this.imageUrl + '/' + id )
            .toPromise()
            .then(response =>
                response.json() as Image)
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}