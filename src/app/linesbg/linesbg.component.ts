import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linesbg',
  template: `
    <head>
    <meta charset="utf-8">
    <style>
      path {
        transform-origin: 50% 0%;
      }
      .background--custom {
        background-color: #FFFFFF;
        position: absolute;
        width: 100vw;
        height: 100vh;
        z-index: -1;
        top: 0;
        left: 0;
      }
      @keyframes path0 {
        0% {
          transform: rotate(-10deg);
        }
        100% {
          transform: rotate(10deg);
        }
      }
      @keyframes path1 {
        0% {
          transform: rotate(-30deg);
        }
        100% {
          transform: rotate(30deg);
        }
      }
      @keyframes path2 {
        0% {
          transform: rotate(40deg);
        }
        100% {
          transform: rotate(-40deg);
        }
      }
    </style>
  </head>
  <body>
    <svg class="background--custom" id="demo" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path fill="#FFFF00" fill-opacity="0.7" d="M-100 -100L200 -100L200 50L-100 50Z" style="animation: path0 5s linear infinite alternate;" /><path fill="#00FFFF" fill-opacity="0.7" d="M-100 -100L200 -100L200 50L-100 50Z" style="animation: path1 12.5s linear infinite alternate;" /><path fill="#FF00FF" fill-opacity="0.2" d="M-100 -100L200 -100L200 20L-100 20Z" style="animation: path2 30s linear infinite alternate;" />
    </svg>
  </body>
  `,
  styles: [
  ]
})
export class LinesbgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
