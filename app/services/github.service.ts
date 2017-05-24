import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username:string;
  private client_id = '9eca7bb22b1f100b5c29';
  private client_secret = 'a89f3982951ea2a06e9305590c52d4393f14a596';

  constructor(private _http: Http){
    console.log('Github Service Ready...');
    this.username = 'jbok4';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
    .map(res => res.json());
  }
}