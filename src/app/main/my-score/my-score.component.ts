import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ScoreService} from '../score.service';

@Component({
  selector: 'app-my-score',
  templateUrl: './my-score.component.html',
  styleUrls: ['./my-score.component.scss']
})
export class MyScoreComponent implements OnInit {
  @Input() name;

  constructor(public score: ScoreService) {

  }

  ngOnInit() {
  }

}
