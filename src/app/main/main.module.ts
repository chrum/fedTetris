import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import {TetrisCoreModule} from 'ngx-tetris';
import { ControllerComponent } from './controller/controller.component';
import {HotkeyModule} from 'angular2-hotkeys';
import { HiscoreComponent } from './hiscore/hiscore.component';
import { BestPipe } from './best.pipe';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [GameComponent, ControllerComponent, HiscoreComponent, BestPipe],
  imports: [
    CommonModule,
    TetrisCoreModule,
    HotkeyModule.forRoot(),
    HttpClientModule
  ],
  exports: [GameComponent]
})
export class MainModule { }
