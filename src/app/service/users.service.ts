import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../pages/admin/contents/users/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // private apiUrl = './assets/resource/users.json';
  private apiUrl = 'http://localhost:3210/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Users[]>{
    return this.http.get<Users[]>(this.apiUrl);
  }
}
