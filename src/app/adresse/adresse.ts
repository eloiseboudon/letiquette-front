import {Membres} from '../membres/membres';

export class Adresse {
    id: number;
    client: Membres;
    nom: string;
    prenom: string;
    ad_mail: string;
    nom_adresse: string;
    adresse: string;
    complement: string;
    ville: string;
    code_postal: string;
    pays: string;
}