import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlBase = environment.URL_BASE_PUBLIC;

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    return this.http.post<any>(this.urlBase + 'login', user);
  }

  loginOut(): void {
    localStorage.clear();
  }

  logein(): boolean {
    return !!localStorage.getItem('token');
  }

  gettoken(): string | null {
    return localStorage.getItem('token');
  }
}
