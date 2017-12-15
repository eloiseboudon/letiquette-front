import { Ville } from '../villes/ville';

export class Fournisseur {
    id: number;
    ville: Ville;
    nomMarque: string;
    checked: boolean = false;
    nomResponsable: string;
    adMail: string;
    adresse: string;
    numTel: number;
    logo: string;
}