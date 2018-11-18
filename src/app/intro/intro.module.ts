import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerFormComponent } from './player-form/player-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [PlayerFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [PlayerFormComponent]
})
export class IntroModule { }
