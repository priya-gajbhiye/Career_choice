import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://dev-api.wanasti.com/api/v1/user/login?lang=en&currencyCode=KW';  // The login API URL

  constructor(private http: HttpClient) { }

  login(username: any, password: any): Observable<any> {
    const body = {
      email: username,
      password: password
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "dAwMpo/TAWLhFrwwr3Wzcmc8XTdmAgp6zmGLsFmJ9HAnEbTQAg937i/hqKFjtFVQ4TnQ2y6xlVSeTKy3VWcxvalwvmPq6qF7+UcLd3wBXYoVQ2Puj49mTweKh/v2Rvj9zyVjfbexFkjMNZ5XyGucmdOI6XMmI98Zvu38Jh1fOo8157YxlgCozKkonixczjGIn3RKLuv7v3gXDRl4irzRcS6lYKGJB8vfA847GUppsVjdZV9bAjADfqUP2Iyl6Nz8MOWrSHNy8tWqhM6mI165rCwH3xMv7HEexmsMO7Mi36c=s."
    });

    // Make the POST request to the API
    return this.http.post<any>(this.apiUrl, body, {headers});
  }
}