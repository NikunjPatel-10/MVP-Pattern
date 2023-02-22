import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../user.model';

@Injectable()
export class UserApiService {
  public baseUrl: string
  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/"
  }

  public postUserData(User: user): Observable<user> {
    const url = this.baseUrl + "userdata";
    return this.http.post<user>(url, User)
  }

  public getUserData(): Observable<user[]> {
    const url = this.baseUrl 
    return this.http.get<user[]>(url)
  }

}
