import {Panier} from '../panier/panier';
import {Produit} from '../produits/produit';
import {Taille} from '../tailles/taille';

export class DetailPanier{
    id: string;
    panier: Panier;
    produit: Produit;
    quantite: number;
    taille: Taille;
}