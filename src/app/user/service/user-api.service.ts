import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../user.model';

@Injectable()
export class UserApiService {
  public baseUrl: string;

  /**
   * 
   * @param http 
   */
  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/"
  }

  /**
   * 
   * @param User 
   * @returns 
   */
  public postUserData(User: user): Observable<user> {
    const url = this.baseUrl + "userdata";
    return this.http.post<user>(url, User)
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  public getUserById(id: number) {
    const url = this.baseUrl + "userdata/" + id;
    return this.http.get(url)
  }

  public getUserData(): Observable<user[]> {
    const url = this.baseUrl + "userdata"
    return this.http.get<user[]>(url)
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  public deleteUserData(id: number): Observable<user> {
    const url = this.baseUrl + "userdata/" + id
    return this.http.delete<user>(url)
  }


  public updateUserData(User:user ,id:number):Observable<user>{
    const url = this.baseUrl + "userdata/" + id
    return this.http.put<user>(url,User)
  }

}
