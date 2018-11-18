import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  data = [];

  constructor(private _http: HttpClient) {
    this.fetchData();
  }

  fetchData() {
      const URL = 'https://tetris.chrum.it/scores';
      const headers = new HttpHeaders({
          'accept': 'application/json'
      });

      this._http.get(URL, {
          headers
      }).subscribe((results: Array<any>) => {
        this.data = results;
      });
  }
}
