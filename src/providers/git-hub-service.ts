import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GitHubService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GitHubService {

  constructor(public http: Http) {
    console.log('Hello GitHubService Provider');
  }

  getRepos(username) {
    let repos = this.http.get(`https://api.github.com/users/${username}/repos`);
    return repos;
  }

}
