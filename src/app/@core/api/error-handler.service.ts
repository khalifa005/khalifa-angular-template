import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

constructor() { }

logError(error: HttpErrorResponse){

  if(error.error instanceof ErrorEvent){
//clent error
  }else{
    //server error
  }

  //use it inside api service with pipe
  //and chek the interceptor  
  // return throwerr
}

}
