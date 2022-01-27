import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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

  private getUsersUnsubscribe$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  public getUsersCanceled() {
    this.getUsersUnsubscribe$.next();
    this.getUsersUnsubscribe$.complete();
    this.getUsersUnsubscribe$ = new Subject<void>();
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users');
  }

  public getUser(id: number): Observable<User> {
    return this.http.get<User>(`http://localhost:3000/users/${id}`);
  }

  public createUser(userInfo: User): Observable<User> {
    const body = JSON.stringify(userInfo);
    return this.http.post<User>('http://localhost:3000/users', body, httpOptions);
  }

  public updateUser(id: number, userInfo: User): Observable<User> {
    const body = JSON.stringify(userInfo);
    return this.http.put<User>(`http://localhost:3000/users/${id}`, body, httpOptions);
  }

  public deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`http://localhost:3000/users/${id}`);
  }
}
