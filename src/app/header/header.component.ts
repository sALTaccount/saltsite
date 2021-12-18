import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <!-- header -->
    <div class="navbar is-dark">
      <!-- logo -->
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="assets/img/logo_banner.png">
        </a>
        <a class="navbar-item" routerLink="/">
          Home
        </a>
        <a class="navbar-item">
          Projects
        </a>
        <a class="navbar-item" routerLink="/contact">
          Contacts
        </a>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
