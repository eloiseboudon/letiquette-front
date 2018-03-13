import {Membres} from '../membres/membres';

export class Adresse {
    id: number;
    client: Membres;
    email: string;
    nom: string;
    adresse: string;
    complement: string;
    ville: string;
    codePostal: string;
    pays: string;
}