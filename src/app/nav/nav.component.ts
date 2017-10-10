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
      if (window.innerWidth > 1260) {
        if ($(this).scrollTop() > 120) {
          document.getElementById("top-page-scroll").style.visibility = "visible";
          document.getElementById("top-barre").style.visibility = "hidden";
          document.getElementById("top-barre").style.position = "static";
        }
        else {
          document.getElementById("top-barre").style.position = "fixed"; 
          document.getElementById("top-page-scroll").style.visibility = "hidden";
          document.getElementById("top-barre").style.visibility = "visible";
        }
      }else{

          document.getElementById("top-barre").style.position = "fixed";  
          document.getElementById("top-page-scroll").style.visibility = "hidden";
          document.getElementById("top-barre").style.visibility = "visible";        
      }

    });



    $(window).resize(function () {
      if (window.innerWidth > 1260) {
        if ($(this).scrollTop() > 120) {
          document.getElementById("top-page-scroll").style.visibility = "visible";
          document.getElementById("top-barre").style.visibility = "hidden";
          document.getElementById("top-barre").style.position = "static";
        }
        else {
          document.getElementById("top-barre").style.position = "fixed"; 
          document.getElementById("top-page-scroll").style.visibility = "hidden";
          document.getElementById("top-barre").style.visibility = "visible";
        }
      }else{

          document.getElementById("top-barre").style.position = "fixed";  
          document.getElementById("top-page-scroll").style.visibility = "hidden";
          document.getElementById("top-barre").style.visibility = "visible";        
      }

    });

    $('#top-icon').click(function(e){
      e.preventDefault();
      $('body').toggleClass('sidebar');
    })



    $('#global-cache').click(function(e){
      $('body').removeClass('sidebar');
    })

  }


}
