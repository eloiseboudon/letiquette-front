import { Component } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  moduleId: module.id,
  selector: 'ng-nav',
  templateUrl: 'nav.component.html' 
})

export class NavbarComponent {

  ngOnInit(): void {
    $(window).scroll(function () { 
        if ($(this).scrollTop() > 120) {      
            document.getElementById("top-page-scroll").style.visibility = "visible";
            document.getElementById("top-page").style.visibility = "hidden";
        } else {    
          document.getElementById("top-page-scroll").style.visibility = "hidden";
          document.getElementById("top-page").style.visibility = "visible";
        }
    });
  }



 




}
