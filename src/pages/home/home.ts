import { Component } from '@angular/core';
import { GitHubService } from '../../providers/git-hub-service';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GitHubService]

})
export class HomePage {
  public foundRepos;
  public username;

  // inject the NavController and GithuibService provider into the constructor
  constructor(private nav: NavController,
              private github: GitHubService) {
  }

  getRepos() {
    this.github.getRepos(this.username).subscribe(
      data => {
        this.foundRepos = data.json();
      },
      err => console.error(err),
      () => console.log('getRepos completed')
    );
  }

  goToDetails(repo) {
    // Push DetailsPage onto the navigation stack. Ionic will take care of loading the page and displaying the view transitions.
    this.nav.push(DetailsPage, { repo: repo }); // sending repo to DetailsPage to show which was selected by the user.
  }
}
