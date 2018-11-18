import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {
  @Input() gameTitle = 'no name';
  @Output() submitted = new EventEmitter();

  name: string;

  constructor() { }

  ngOnInit() {
  }

  formSubmit() {
    this.submitted.emit();
  }

}
