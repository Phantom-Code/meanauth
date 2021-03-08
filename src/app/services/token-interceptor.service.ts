import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private auth: AuthService) {}
  intercept(req, next) {
    let tokenizedReq = req.clone({
      setHeaders: {
        'auth-token': this.auth.getToken(),
      },
    });
    return next.handle(tokenizedReq);
  }
}
