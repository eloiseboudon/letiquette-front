import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'cgv',
    template: '<div class="contenu">\n' +
    '    <div class="global_width">\n' +
    '        <div class="footer">\n' +
    '\n' +
    '            <h1 title="Paiements sécurisés">Paiements sécurisés</h1>' +
    '<p>L’Etiquette prend très au sérieux la protection des données de ses clients. Les paiements sont sécurisés et gérés par <a href="https://paygreen.io/">PayGreen</a>. <br/>' +
    'A aucun moment les données bancaires ne transitent par le système informatique de L’Etiquette. </p>' +
    '</div> </div> </div>'
})

export class PaiementsSecurisesComponent implements OnInit{
    constructor(private router: Router) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }

}
