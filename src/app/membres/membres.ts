import {Ville} from '../villes/ville';

export class Membres {
    id: number;
    ville: Ville;
    login: string;
    password: string;
    nom: string;
    prenom: string;
    adMail: string;
    adresse: string;
    numTel: string;
}