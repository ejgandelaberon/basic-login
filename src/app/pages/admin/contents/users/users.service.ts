import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = './assets/resource/users.json';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Users[]>{
    return this.http.get<Users[]>(this.apiUrl);
  }
}
