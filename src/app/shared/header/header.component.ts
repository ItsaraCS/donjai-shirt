import { Component, OnInit } from '@angular/core';

declare let $: any;

$(document).ready(function() {
  $(document).on('click', '.show-link-mobile', function(e) {
    e.preventDefault();
    
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