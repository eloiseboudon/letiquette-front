import {Famille} from '../familles/famille';
import {Fournisseur} from '../fournisseurs/fournisseur';
import {Couleur} from '../couleurs/couleur';
import {Image} from '../image/image';

export class Produit {
    id: number;
    famille: Famille;
    fournisseur: Fournisseur;
    libelle: string;
    prix: number;
    image: Image;
    description: string;
    couleur: Couleur;
}

