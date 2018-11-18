import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-my-score',
  templateUrl: './my-score.component.html',
  styleUrls: ['./my-score.component.scss']
})
export class MyScoreComponent implements OnInit {
  @Input() name;
  data: any;

  constructor(private _http: HttpClient) {
      const URL = 'https://tetris.chrum.it/scores';
      const headers = new HttpHeaders({
          'accept': 'application/json'
      });

      this.data = this._http.get(URL, {
          headers
      });
  }

  ngOnInit() {
  }

}
