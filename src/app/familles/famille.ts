import {FamilleGlobal} from '../famillesGlobal/familleGlobal';

export class Famille {
    id: number;
    famille: string;
    sexe: string;
    checked: boolean = false;
    famille_global: FamilleGlobal;
}