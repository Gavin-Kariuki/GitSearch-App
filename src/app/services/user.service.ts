import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  mtumiaji: Users[] = [];
  _URL = 'https://api.github.com/users/';
  token = '?8b9e17143d094a525a75e0d0637d4f7691770cb4';

  constructor(private http: HttpClient) {}
  tafutaMtumiaji(value: string) {
    interface ApiResponse {
      avatar_url: string;
      name: string;
      bio: string;
      followers: string;
      following: string;
      public_repos: string;
    }
    let ahadi = new Promise<void>((resolve, reject) => {
      this.mtumiaji = [];
      this.http
        .get<ApiResponse>(this._URL + value + this.token)
        .toPromise()
        .then(
          (results) => {
            this.mtumiaji.push(results);
            console.log(results);

            resolve();
          },
          (err) => {
            reject();
          }
        );
    });
    return ahadi;
  }
}
