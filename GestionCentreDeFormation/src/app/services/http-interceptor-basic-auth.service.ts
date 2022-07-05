import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService {

  authenticated = false;

  constructor(private http: HttpClient) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    let basicchaine=sessionStorage.getItem('t');
if(basicchaine)
{
    req=req.clone({
      setHeaders:{
        Authorization: basicchaine
      }
    })
}
    return next.handle(req);
  }

  
}
