import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../../@auth/services/auth.service';
import { ToastNotificationService } from '../utils/toast-notification.service';
import { TranslateService } from '@ngx-translate/core';
import { catchError } from 'rxjs/operators';
import { NotitficationsDefaultValues } from '../utils/static-data/default-values';
import { Router } from "@angular/router";
import { Logger } from '../utils/logger.service';

@Injectable()

//we need to add in in the app module in provider[{}]
//provide:add const(HTTP_INTERCEPTORS)  useClass:HeadersInterceptor MULTI:TRUE
//better organisation to use index.ts and then add it in th eprocider array
//REVIEW THE OLD INTERCEPTORS

export class HeadersInterceptor implements HttpInterceptor {

  private log = new Logger(HeadersInterceptor.name);
  constructor(private auth: AuthService,
    private toastNotificationService: ToastNotificationService,
    public translate: TranslateService,
    private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.auth.getToken();
    if (token) {
      request = request.clone({
        setHeaders: { authorization: `Bearer ${token}` },
      });

    }
    //add logic here
    return next.handle(request).pipe(
      catchError((err: any) => {

        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.log.info("Error Status : 401 | Token may be expired");
            this.router.navigateByUrl('auth/login').then(()=>{
              this.toastNotificationService.showNotificationWithCustomIcon(NotitficationsDefaultValues.Warning, 'email-outline', "Warning", "Token expired , Login again");
            });
          }
          else{
            this.log.info(`Error Status : ${err.status}`);
          }
        }
        else{
          this.log.info("Some other error occured");
        }

        return throwError(()=> new Error("Some other error occured"));
      }));
  }

}
