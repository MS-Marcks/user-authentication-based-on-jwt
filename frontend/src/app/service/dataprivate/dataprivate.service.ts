import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataprivateService {

  private urlBase = environment.URL_BASE_PRIVATE;

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get<any>(this.urlBase);
  }


}
