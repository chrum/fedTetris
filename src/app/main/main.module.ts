import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import {TetrisCoreModule} from 'ngx-tetris';
import { ControllerComponent } from './controller/controller.component';

@NgModule({
  declarations: [GameComponent, ControllerComponent],
  imports: [
    CommonModule,
    TetrisCoreModule
  ],
  exports: [GameComponent]
})
export class MainModule { }
