import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <style>
      div {
      padding: 30px;
      }
    </style>

    <!-- lines background -->
    <app-linesbg></app-linesbg>
    <section class="hero is-primary" style="backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(0, 0, 0, 0.25);">
      <div class="hero-body">
        <p class="title">
          Home
        </p>
        <p class="subtitle">
          
        </p>
      </div>
    </section>


  <div class="tile is-ancestor">
    <style>
</style>
    <div class="tile is-4 is-vertical is-parent">
      <div class="tile is-child box" style="backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);">
        <p class="title">What is this?</p>
        <p>This is a website for me to host my projects on</p>
      </div>
      <div class="tile is-child box" style="backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);">
        <p class="title">What projects are you currently working on?
        </p>
        <p>
          Right now, I am currently working on Pring. Pring is a torrented video manager that will automatically manage searching, torrenting, playing, and keeping track of what you watched.
        </p>
        <p>
          The other main project I am working on right now is SaltSite, which is the website you are currently reading.
        </p>
      </div>
      <div class="tile is-child box" style="backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);">
        <p class="title">Who am I?
        </p>
        <p>
          My name is Adrien Peterson. I'm currently learning C#, C++, and Python. I'm learning these languages through various projects I'm doing. I upload the more useful projects onto my Github.
        </p>
      </div>
    </div>
    <div class="tile is-parent">
      <div class="tile is-child box"  style="backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);">
        <p class="title">Projects</p>
          <div class="content">
          <ul style="font-size:24px">
            <li>iFunnyCaptionGUI</li>
              <p style="font-size:18px">
              A program written in C# to create ifunny style gif captions on PC
              </p>
            <li>Pring (WIP)</li>
              <p style="font-size:18px">
              A C# program that handles searching, downloading, indexing, and playing of torrented videos and video series
              </p>
            <li>AntiTokenLogger (WIP)</li>
              <p style="font-size:18px">
              A program made to prevent logging of discord tokens through malicious executables
              </p>
            <li>SaltSite (WIP)</li>
              <p style="font-size:18px">
              The website you are currently on. Written in AngularJS with Bulma
              </p>
            <li>bruhh i really dont have any more projects to add 😭😢😭</li>
              <p style="font-size:18px">
              i'll think of something......
              </p>
          </ul> 
          </div>
      </div>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
