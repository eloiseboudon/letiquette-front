import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'cgv',
    templateUrl: 'cgv.component.html'
})

export class CGVComponent implements OnInit{
    constructor(private router: Router) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
        this.goToTop();
    }


    goToTop(): void {
        $(window).scroll(function () {
            const posScroll = $(document).scrollTop();
            if (posScroll >= 180) {
                document.getElementById('top_link').style.display = 'block';
            } else {
                document.getElementById('top_link').style.display = 'none';
            }
        });
    }

    scroll(): void {
        window.scrollTo(0, 0);
    }


}
