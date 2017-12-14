import { Ville } from "../villes/ville";

export class Fournisseur{
    id: number;
    ville: Ville;
    nomMarque: string;
    // isActive: boolean = false;
    nomResponsable: string;
    adMail: string;
    adresse: string;
    numTel: number;
    logo: string;
}