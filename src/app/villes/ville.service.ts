import { Injectable }    from '@angular/core';
import { Headers, Http , Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Ville } from './ville';
import { Pays } from '../pays/pays';
// import { Pays } from '../pays/pays';


@Injectable()
export class VilleService{
    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    private villesUrl = 'http://127.0.0.1:8000/villes';  // URL to api
    private villePaysUrl;

    constructor(private http: Http) { }

    getVilles(): Promise<Ville[]> {
        return this.http.get(this.villesUrl)
            .toPromise()
            .then(response => 
                response.json() as Ville[])
            .catch(this.handleError);
    }


    // getVille(id: number): Promise<Ville> {
    //     const url = `${this.villesUrl}/${id}`;
    //     return this.http.get(url)
    //         .toPromise()
    //         .then(response => response.json() as Ville)
    //         .catch(this.handleError);
    // }

    // create(name: string): Promise<Ville> {
    //     return this.http
    //       .post(this.villesUrl, JSON.stringify({name: name}), {headers: this.headers})
    //       .toPromise()
    //       .then(res => res.json() as Ville)
    //       .catch(this.handleError);
    // }

    
    create(name: string, codePostal: string, pays:Pays): Promise<Ville>{  
        let data ='name='+name;
        data+='codePostal'+codePostal;
        this.villePaysUrl = this.villesUrl+"/pays/"+pays.id

        return this.http
            .post(this.villesUrl, data, {headers: this.headers})
            .toPromise()
            .then(response => {
                console.log("create " + name);
                console.log(response.json());
                
                return response.json() as Ville;                
            })
            .catch(this.handleError);

    }
    




    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}