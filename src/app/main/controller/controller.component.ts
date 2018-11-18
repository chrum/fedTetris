import {Component, Input, OnInit} from '@angular/core';
import {TetrisCoreComponent} from 'ngx-tetris';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {
  @Input() game: TetrisCoreComponent;
  constructor() { }

  ngOnInit() {
  }

}
