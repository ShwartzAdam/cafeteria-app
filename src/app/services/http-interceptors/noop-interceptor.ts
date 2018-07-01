import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserData} from '../user-data/user-data.service';


export class AddHttpHeaderInterceptor implements HttpInterceptor {
  private userData: UserData;
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth header from the service.
    const authHeader = 'token_value';
    const clonedReq = req.clone({headers: req.headers.set('Authorization', authHeader)});

    return next.handle(clonedReq);
  }
}
