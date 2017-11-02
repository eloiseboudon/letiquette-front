import { Pipe, PipeTransform } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
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
                return items.sort((a: any, b: any) => { return b[sortedBy] - a[sortedBy] });
            }else{
                return items.sort((a: any, b: any) => { return a[sortedBy] - b[sortedBy] });
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
