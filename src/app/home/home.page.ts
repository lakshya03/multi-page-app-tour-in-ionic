import { Component } from '@angular/core';
import introJs from 'intro.js/intro.js';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  ngAfterViewInit(): void {
    this.intro();
  }
  
  intro() {
    let intro = introJs.introJs();
    
    intro.setOptions({
      showStepNumbers: false,
    doneLabel: "Next page",
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
    intro.start().oncomplete(function() {
      window.location.href = './second?multipage=true';
  });
  }
}
