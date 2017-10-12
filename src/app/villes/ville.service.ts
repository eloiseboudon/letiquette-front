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
    private villesDeleteUrl;

    constructor(private http: Http) { }

    getVilles(): Promise<Ville[]> {
        return this.http.get(this.villesUrl)
            .toPromise()
            .then(response => 
                response.json() as Ville[])
            .catch(this.handleError);
    }

    
    create(name: string, codePostal: string, idPays:number): Promise<Ville>{  
        let data ='name='+name+'&'+'codePostal='+codePostal;     
        this.villePaysUrl = this.villesUrl+"/pays/"+idPays;

        return this.http
            .post(this.villePaysUrl, data, {headers: this.headers})
            .toPromise()
            .then(response => 
                 response.json() as Ville)
            .catch(this.handleError);
    }


    delete(id: number): Promise<Ville>{
        this.villesDeleteUrl = this.villesUrl +'/'+ id;
        return this.http
            .delete(this.villesDeleteUrl, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
    

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}