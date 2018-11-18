import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TetrisCoreComponent} from 'ngx-tetris';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() playerName = 'unnamed';
  @Output() ended = new EventEmitter();

  @ViewChild(TetrisCoreComponent) tetris;

  constructor() { }

  ngOnInit() {
  }

  startPlaying() {
    this.tetris.actionStart();
  }

  end() {
    this.ended.emit();
  }

}
