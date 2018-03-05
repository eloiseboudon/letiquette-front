import {Produit} from '../produits/produit';
import {Membres} from '../membres/membres';

export class Wishlist {
    id: number;
    produit: Produit;
    membre: Membres;
}