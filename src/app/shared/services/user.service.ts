import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  // mock post
  postUsers(users: User[]): Observable<User[]> {
    return of(users);
    // return this.http.post<User[]>(URL, user)
  }

  // mock post
  postUser(users: User): Observable<User> {
    return of(users);
    // return this.http.post<User>(URL, user)
  }
}
