import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import {TetrisCoreModule} from 'ngx-tetris';

@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule,
    TetrisCoreModule
  ],
  exports: [GameComponent]
})
export class MainModule { }
