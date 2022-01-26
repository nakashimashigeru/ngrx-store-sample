import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users');
  }

  public createUser(userInfo: User): Observable<User> {
    const body = JSON.stringify(userInfo);
    return this.http.post<User>('http://localhost:3000/users', body, httpOptions);
  }

  public deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`http://localhost:3000/users/${id}`);
  }
}
