import {Famille} from '../familles/famille';
import {Fournisseur} from '../fournisseurs/fournisseur';
import {Couleur} from '../couleurs/couleur';

export class Produit {
    id: number;
    famille: Famille;
    fournisseur: Fournisseur;
    libelle: string;
    prix: number;
    image: string;
    description: string;
    couleur: Couleur;
}

