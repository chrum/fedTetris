import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-hiscore',
  templateUrl: './hiscore.component.html',
  styleUrls: ['./hiscore.component.scss']
})
export class HiscoreComponent implements OnInit {
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
