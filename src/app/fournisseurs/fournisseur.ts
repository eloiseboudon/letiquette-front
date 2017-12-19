import { Ville } from '../villes/ville';

export class Fournisseur {
    id: number;
    ville: Ville;
    nom_marque: string;
    checked: boolean = false;
    nom_responsable: string;
    ad_mail: string;
    adresse: string;
    num_tel: number;
    logo: string;
}