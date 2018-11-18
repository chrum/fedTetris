import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fedTetris';
  name: string;
  gameStarted = false;

  constructor() {
    if (localStorage.name) {
      this.start(localStorage.name);
    }
  }

  start(name) {
    this.name = name;
    localStorage.name = name;
    this.gameStarted = true;
  }

  end() {
    this.gameStarted = false;
  }
}
