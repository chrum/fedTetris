import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerFormComponent } from './player-form/player-form.component';

@NgModule({
  declarations: [PlayerFormComponent],
  imports: [
    CommonModule
  ],
  exports: [PlayerFormComponent]
})
export class IntroModule { }
