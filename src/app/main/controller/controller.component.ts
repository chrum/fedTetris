import {Component, Input, OnInit} from '@angular/core';
import {TetrisCoreComponent} from 'ngx-tetris';
import {Hotkey, HotkeysService} from 'angular2-hotkeys';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {
  @Input() game: TetrisCoreComponent;

  constructor(private _hotkeysService: HotkeysService) {
      this._hotkeysService.add(new Hotkey('up', (event: KeyboardEvent): boolean => {
          this.game.actionRotate();
          return false; // Prevent bubbling
      }));

      this._hotkeysService.add(new Hotkey('down', (event: KeyboardEvent): boolean => {
          this.game.actionDown();
          return false; // Prevent bubbling
      }));

      this._hotkeysService.add(new Hotkey('left', (event: KeyboardEvent): boolean => {
          this.game.actionLeft();
          return false; // Prevent bubbling
      }));

      this._hotkeysService.add(new Hotkey('right', (event: KeyboardEvent): boolean => {
          this.game.actionRight();
          return false; // Prevent bubbling
      }));
  }

  ngOnInit() {
  }

}
