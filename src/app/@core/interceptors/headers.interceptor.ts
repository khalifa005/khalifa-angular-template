import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

//we need to add in in the app module in provider[{}]
//provide:add const(HTTP_INTERCEPTORS)  useClass:HeadersInterceptor MULTI:TRUE
//better organisation to use index.ts and then add it in th eprocider array
//REVIEW THE OLD INTERCEPTORS

export class HeadersInterceptor implements HttpInterceptor  {

     intercept(request:HttpRequest<any>,next:HttpHandler ): Observable<HttpEvent<any>>
    {

      //add logic here
      return next.handle(request);

    }

}
