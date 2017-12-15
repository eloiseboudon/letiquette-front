import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Image } from './image';
import {Famille} from '../familles/famille';

@Injectable()
export class ImageService {

    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    private imageUrl = 'http://127.0.0.1:8000/images';

    constructor(private http: Http) { }

    getImagesByProduit(id: number): Promise<Image[]> {
        return this.http.get(this.imageUrl + "/" + id )
            .toPromise()
            .then(response =>
                response.json() as Famille[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}