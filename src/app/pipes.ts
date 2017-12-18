import {Pipe, PipeTransform} from '@angular/core';
import {TitleCasePipe} from '@angular/common';
import * as _ from 'lodash';


// @Pipe({
//     name: 'libelle',
//     pure: false
// })
// export class LibellePipe implements PipeTransform {

//     constructor(private titlecasePipe: TitleCasePipe) { }
//     transform(items: any[], term): any {
//         term = this.titlecasePipe.transform(term);

//         return term
//             ? items.filter(item => item.libelle.indexOf(term) !== -1)
//             : items;
//     }
// }


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
    name: 'filterMarque',
    pure: false
})

export class FilterMarquePipe implements PipeTransform {

    transform(items: any, filter: any, filterItems: Array<any>, isAnd: boolean): any {
        if (filter && Array.isArray(items) && filterItems) {
            let filterKeys = Object.keys(filter);
            let checkedItems = filterItems.filter(item => { return item.checked; });
            if (!checkedItems || checkedItems.length === 0) { return items; }
            if (isAnd) {
                return items.filter(item =>
                    filterKeys.reduce((acc1, keyName) =>
                            (acc1 && checkedItems.reduce((acc2, checkedItem) =>
                                acc2 && new RegExp(item[keyName], 'gi').test(checkedItem.nomMarque) || checkedItem.nomMarque === "", true))
                        , true)
                );
            } else {
                return items.filter(item => {
                    return filterKeys.some((keyName) => {
                        return checkedItems.some((checkedItem) => {
                            return new RegExp(item[keyName], 'gi').test(checkedItem.nomMarque) || checkedItem.nomMarque === "";
                        });
                    });
                });
            }
        } else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterCouleur',
    pure: false
})
//
export class FilterCouleurPipe implements PipeTransform {

    transform(items: any, filter: any, filterItems: Array<any>, isAnd: boolean): any {
        if (filter && Array.isArray(items) && filterItems) {
            let filterKeys = Object.keys(filter);
            let checkedItems = filterItems.filter(item => { return item.checked; });
            if (!checkedItems || checkedItems.length === 0) { return items; }
            if (isAnd) {
                return items.filter(item =>
                    filterKeys.reduce((acc1, keyName) =>
                            (acc1 && checkedItems.reduce((acc2, checkedItem) =>
                                acc2 && new RegExp(item[keyName], 'gi').test(checkedItem.name) || checkedItem.name === '', true))
                        , true)
                );
            } else {
                return items.filter(item => {
                    return filterKeys.some((keyName) => {
                        return checkedItems.some((checkedItem) => {
                            return new RegExp(item[keyName], 'gi').test(checkedItem.name) || checkedItem.name === '';
                        });
                    });
                });
            }
        } else {
            return items;
        }
    }
}