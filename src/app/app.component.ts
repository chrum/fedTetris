import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fedTetris';
  gameStarted = false;

  start() {
    this.gameStarted = true;
  }

  end() {
    this.gameStarted = false;
  }
}
