import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() playerName = 'unnamed';
  @Output() ended = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  end() {
    this.ended.emit();
  }

}
