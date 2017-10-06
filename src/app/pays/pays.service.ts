import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Pays } from './pays';

@Injectable()
export class PaysService {

    // private headers = new Headers({'Content-Type': 'application/json, application/x-www-form-urlencoded;charset=utf-8, multipart/form-data, text/plain',
    // 'Accept' : 'application/json'});

    // private headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});


    private paysUrl = 'http://127.0.0.1:8001/pays';


    constructor(private http: Http) { }

    getAllPays(): Promise<Pays[]> {
        // console.log(this.paysUrl);
        return this.http.get(this.paysUrl)
            .toPromise()
            .then(response =>
                 response.json() as Pays[] )
            .catch(this.handleError); 
    }


    // getPays(id: number): Promise<Pays> {
    // const url = `${this.paysUrl}/${id}`;
    // return this.http.get(url)
    //     .toPromise()
    //     .then(response => response.json().data as Pays)
    //     .catch(this.handleError);
    // }

    // delete(id: number): Promise<void> {
    // const url = `${this.paysUrl}/${id}`;
    // return this.http.delete(url, {headers: this.headers})
    //     .toPromise()
    //     .then(() => null)
    //     .catch(this.handleError);
    // }

    create(name: string): Promise<Pays>{  
        // console.log(JSON.stringify({name: name}));
        // let dataJson = JSON.stringify({name: name});
        // let data = {name: name};


        // const data = new URLSearchParams();
        // data.set("name", name);

        // let data = new URLSearchParams();
        // data.set('name', name);

        let data ='name='+name;

        return this.http
            .post(this.paysUrl, data, {headers: this.headers})
            .toPromise()
            .then(response => {
                console.log("create " + name);
                console.log(response.json());
                
                return response.json() as Pays;                
            })
            .catch(this.handleError);
    }



    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}