import { Component, OnInit } from '@angular/core';
import introJs from 'intro.js/intro.js';
@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.intro();
  }
  
  intro() {
    if (RegExp('multipage', 'gi').test(window.location.search)){
    let intro = introJs.introJs();
    intro.setOptions({
    steps: [
      {
        intro: "Hello world!"
      },
      {
        element: '#step1',
        intro: "This is a tooltip.",
        position: 'bottom'
  
      },
      {
        element: '#step2',
        intro: "Ok, wasn't that fun?",
        position: 'bottom'
      }
    ]
    });
    intro.start();

}
  }
}
