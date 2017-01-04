import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
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

  getDetails(repo) {
    let headers = new Headers();
    // Specify that we want a response in HTML format for DetailsPage.
    headers.append('Accept', 'application/vnd.github.VERSION.html');

    // Returns contents of the repo's README file.
    return this.http.get(`${repo.url}/readme`, { headers: headers });
  }

}
