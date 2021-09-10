import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const Tokenreq = req.clone({
      setHeaders: {
        'x-access-token': 'bearer ' + localStorage.getItem('token')
      },
    });
    return next.handle(Tokenreq);
  }
}
