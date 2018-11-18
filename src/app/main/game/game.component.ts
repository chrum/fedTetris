import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TetrisCoreComponent} from 'ngx-tetris';
import {ScoreService} from '../score.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() playerName = 'unnamed';
  @Output() ended = new EventEmitter();

  @ViewChild(TetrisCoreComponent) tetris;

  points = 0;

  constructor(private _score: ScoreService) { }

  ngOnInit() {
  }

  startPlaying() {
    this.tetris.actionStart();
  }

  end() {
    this.ended.emit();
  }

  onGameOver() {
    this._score.submit(this.playerName, this.points);
  }

  fakeGameOver() {
    this._score.submit(this.playerName, 1);
  }

  onLineCleared() {
    this.points++;
  }

}
