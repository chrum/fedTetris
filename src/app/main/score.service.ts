import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  data = [];

  url = 'https://tetris.chrum.it/scores';

  constructor(private _http: HttpClient) {
    this.fetchData();
  }

  fetchData() {
      const headers = new HttpHeaders({
          'accept': 'application/json'
      });

      this._http.get(this.url, {
          headers
      }).subscribe((results: Array<any>) => {
        this.data = results;
      });
  }

  submit(name, score) {
      this._http.post(this.url, {
          name,
          score,
          auth: '<put your key here>'
      }).subscribe((result: Array<any>) => {
          this.data = result;
      });
  }
}
