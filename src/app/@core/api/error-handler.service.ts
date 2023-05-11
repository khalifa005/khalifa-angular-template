import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Logger } from '../utils/logger.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

private log = new Logger(ErrorHandlerService.name);

constructor() { }

logError(error: HttpErrorResponse){

  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }

  //show toaster here
  this.log.error(errorMessage);

  window.alert(errorMessage);
  return throwError(() => {
    return errorMessage;
  });

}

}
