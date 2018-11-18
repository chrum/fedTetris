import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ScoreService} from '../score.service';

@Component({
  selector: 'app-hiscore',
  templateUrl: './hiscore.component.html',
  styleUrls: ['./hiscore.component.scss']
})
export class HiscoreComponent implements OnInit {
  constructor(public score: ScoreService) {

  }


  ngOnInit() {
  }

}
