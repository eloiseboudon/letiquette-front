import { Pipe, PipeTransform } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Pipe({
    name: 'libelle',
    pure: false
})
export class LibellePipe implements PipeTransform {

    constructor(private titlecasePipe: TitleCasePipe) { }
    transform(items: any[], term): any {
        term = this.titlecasePipe.transform(term);

        return term
            ? items.filter(item => item.libelle.indexOf(term) !== -1)
            : items;
    }

}


@Pipe({
    name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
    transform(items: any[], sortedBy: string): any {
        console.log('sortedBy', sortedBy);
        if (items !== undefined) {
            return items.sort((a: any, b: any) => { return b[sortedBy] - a[sortedBy] });
        }
    }
}