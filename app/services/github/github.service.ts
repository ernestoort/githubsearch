/**
 * Created by ernestoo on 18/11/16.
 */
import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import  'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private userName: string;
  private clientId: string = '58703f4ba4e4f3a69b7f';
  private clientSecret: string = 'd723ff47cb3018b6b9f86293d424d6f9966b7cab';

  constructor(private http: Http) {
    console.log('Github service Ready');
    this.userName = 'ernestoort';
  }

  getUser() {
    return this.http.get('http://api.github.com/users/' + this.userName
      + '?client_id=' + this.clientId
      + '&client_secret=' + this.clientSecret
    ).map((res: Response) => res.json());
  }

  getRepos() {
    return this.http.get('http://api.github.com/users/' + this.userName
      + '/repos?client_id=' + this.clientId
      + '&client_secret=' + this.clientSecret
    ).map((res: Response) => res.json());
  }


  updateUser(userName: string) {
    this.userName = userName;
  }
}
