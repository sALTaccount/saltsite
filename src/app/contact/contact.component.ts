import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Contacts</h1>
        </div>
      </div>
    </section>

    <!-- Accounts tab -->
    <section class="section">
      <div class="container">
        <article class="panel is-info">
          <p class="panel-heading">
            Accounts
          </p>
          <a class="panel-block is-active">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            Github:
              <a href="https://github.com/sALTaccount" style="padding-left: 5px;" target="_blank"> sALTaccount</a> 
              </a>
        </article>
      </div>
    </section>

    <!-- Communications tab -->
    <section class="section">
      <div class="container">
        <article class="panel is-info">
          <p class="panel-heading">
            Communication
          </p>
          <a class="panel-block is-active">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            Email:
            <a href = "mailto:saltaccoun7@gmail.com" style="padding-left: 5px;"> saltaccoun7@gmail.com</a>
          </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
              </span>
              Discord: salt#7234
            </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
              </span>
              Instagram:
              <a href="https://www.instagram.com/adrien.salt/" style="padding-left: 5px;" target="_blank"> adrien.salt</a> 
            </a>
        </article>
      </div>
    </section>

  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
