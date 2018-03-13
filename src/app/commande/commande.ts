import {Membres} from '../membres/membres';
import {Panier} from '../panier/panier';
import {Adresse} from '../adresse/adresse';

export class Commande{
    client: Membres;
    panier: Panier;
    livraison: Adresse;
    facturation: Adresse;
}