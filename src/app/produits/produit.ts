import { Famille } from "../familles/famille";
import { Fournisseur } from "../fournisseurs/fournisseur";

export class Produit{
    id: number;
    famille: Famille;
    fournisseur:Fournisseur;
    libelle:string;
    prix:number;
    image:string;
    description:string;
  }

