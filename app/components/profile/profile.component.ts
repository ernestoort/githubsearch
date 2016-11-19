/**
 * Created by ernestoo on 18/11/16.
 */
import {Component, OnInit} from '@angular/core';
import {GithubService} from '../../services/github/github.service';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {
  user: any;
  repos: any[];
  userName: string;

  constructor(private githubService: GithubService) {
    this.user = false;
    /*    this.githubService.getUser().subscribe(user => {
     console.log(user);
     this.user = user;
     });

     this.githubService.getRepos().subscribe(repos => {
     console.log(repos);
     this.repos = repos;
     });*/


  }

  ngOnInit() {
  }

  searchUser() {
    this.githubService.updateUser(this.userName);

    this.githubService.getUser().subscribe(user => {
      // console.log(user);
      this.user = user;
    });

    this.githubService.getRepos().subscribe(repos => {
      // console.log(repos);
      this.repos = repos;
    });
  }


}
