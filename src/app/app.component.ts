import { Component } from '@angular/core';

declare let $: any;

$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 50)
            $('.back-to-top').fadeIn();
        else
            $('.back-to-top').fadeOut();
    });

    $(document).on('click', '.back-to-top', function(e) {
        e.preventDefault();

        $('.back-to-top').tooltip("hide");
        $('body, html').animate({
            scrollTop: 0
        }, 800);

        return false;
    });
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}