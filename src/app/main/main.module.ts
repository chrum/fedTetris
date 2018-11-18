import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import {TetrisCoreModule} from 'ngx-tetris';
import { ControllerComponent } from './controller/controller.component';
import {HotkeyModule} from 'angular2-hotkeys';
import { HiscoreComponent } from './hiscore/hiscore.component';
import { BestPipe } from './best.pipe';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { MyScoreComponent } from './my-score/my-score.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [GameComponent, ControllerComponent, HiscoreComponent, BestPipe, FilterPipe, MyScoreComponent],
  imports: [
    CommonModule,
    TetrisCoreModule,
    HotkeyModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  exports: [GameComponent]
})
export class MainModule { }
