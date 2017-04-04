import { Component, OnInit } from '@angular/core';

declare let $: any;

$(document).ready(function() {
  $(document).on('click', '.show-link-mobile', function(e) {
    e.preventDefault();
    
    var showLinkMobileClass = '{ display: block }';
    //$('.link-mobile').css({ 'display': 'block' });

    if($('.link-mobile').is(':visible'))
      $('.link-mobile').css({ 'display': 'none' });
    else
      $('.link-mobile').css({ 'display': 'block' });
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