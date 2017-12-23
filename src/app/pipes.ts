import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';


@Pipe({
    name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
    transform(items: any[], sortedBy: string, order: any): any {
        if (items !== undefined) {
            if (order == 'desc') {
                return items.sort((a: any, b: any) => {
                    return b[sortedBy] - a[sortedBy];
                });
            } else {
                return items.sort((a: any, b: any) => {
                    return a[sortedBy] - b[sortedBy];
                });
            }

        }
    }
}


@Pipe({
    name: 'unique',
    pure: false
})

export class UniquePipe implements PipeTransform {
    transform(value: any): any {
        if (value !== undefined && value !== null) {
            return _.uniqBy(value, 'id');
        }
        return value;
    }
}


@Pipe({
    name: 'filterPrice',
    pure: false
})

export class FilterPricePipe implements PipeTransform {
    prixMin: number;
    prixMax: number;

    transform(items: any[]): any {
        this.prixMin = parseInt(document.getElementById('skip-value-lower').innerHTML);
        this.prixMax = parseInt(document.getElementById('skip-value-upper').innerHTML);
        if (items !== undefined) {
            return items.filter(item => item.prix < this.prixMax && item.prix > this.prixMin);
        }
    }
}



@Pipe({
    name: 'filterTaille',
    pure: false
})

export class FilterTaillePipe implements PipeTransform {

    transform(values: any, args?: any[]): any[] {
        if (values) {
            return values = values.filter(a => {
                return args.length ? args.indexOf(a.taille) !== -1 : values;
            });
        }
    }
}


@Pipe({
    name: 'filterMarque',
    pure: false
})

export class FilterMarquePipe implements PipeTransform {

    transform(values: any, args?: any[]): any[] {
        if (values) {
            return values = values.filter(a => {
                return args.length ? args.indexOf(a.marque) !== -1 : values;
            });
        }
    }
}


@Pipe({
    name: 'filterCouleur',
    pure: false
})

export class FilterCouleurPipe implements PipeTransform {

    transform(values: any, args?: any[]): any[] {
        if (values) {
            return values = values.filter(a => {
                if (!a.couleur && args.length) {
                    return null;
                } else if (args.length) {
                    return args.indexOf(a.couleur) !== -1;
                } else {
                    return values;
                }
            });
        }
    }
}