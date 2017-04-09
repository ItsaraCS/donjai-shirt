import { Component, OnInit } from '@angular/core';

declare let $: any;

$(document).ready(function() {
  $(document).on('click', '.show-link-mobile', function(e) {
    e.preventDefault();

    if($(this).find('span').html() == 'เมนู') {
      $(this).animate({ 'opacity': '0' }, 250, function() {
          $(this).find('i').removeClass('fa-bars').addClass('fa-times');
          $(this).find('span').html('ปิด');
      }).animate({ 'opacity': '1' }, 250);
    } else {
      $(this).animate({ 'opacity': '0' }, 250, function() {
          $(this).find('i').removeClass('fa-times').addClass('fa-bars');
          $(this).find('span').html('เมนู');
      }).animate({ 'opacity': '1' }, 250);
    }

    $('.link-mobile').toggleClass('show-link-mobile-toggle');
  });

  $(document).on('click', '.hide-link-mobile', function(e) {
    e.preventDefault();
    
    $('.hide-link-mobile').addClass('hide-showhide-link-mobile-toggle');
    $('.show-link-mobile').addClass('show-showhide-link-mobile-toggle');
    $('.link-mobile').toggleClass('show-link-mobile-toggle');
  });
});

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }
}