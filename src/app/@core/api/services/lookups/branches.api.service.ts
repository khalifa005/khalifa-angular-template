import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { LookupDto } from '../../../models/lookup.model';
import { ErrorHandlerService } from '../../error-handler.service';
import { environment } from '../../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TicketCategoriesApiService {
  // Define API
  getList = environment.serverUrl + '/api/TicketCategories';

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    //  'Access-Control-Allow-Origin': '*',

})};

  // HttpClient API get() method => Fetch LookupDtos list
  getListItem(): Observable<LookupDto> {
    return this.http
      .get<LookupDto>(this.getList)
      .pipe(retry(1), catchError(this.errorHandlerService.logError));
  }

  // // HttpClient API get() method => Fetch LookupDto
  // getById(id: any): Observable<LookupDto> {
  //   return this.http
  //     .get<LookupDto>(this.apiURL + '/LookupDtos/' + id)
  //     .pipe(retry(1), catchError(this.errorHandlerService.logError));
  // }

  // // HttpClient API post() method => Create LookupDto
  // create(LookupDto: any): Observable<LookupDto> {
  //   return this.http
  //     .post<LookupDto>(
  //       this.apiURL + '/LookupDtos',
  //       JSON.stringify(LookupDto),
  //       this.httpOptions
  //     )
  //     .pipe(retry(1), catchError(this.errorHandlerService.logError));
  // }

  // // HttpClient API put() method => Update LookupDto
  // update(id: any, LookupDto: any): Observable<LookupDto> {
  //   return this.http
  //     .put<LookupDto>(
  //       this.apiURL + '/LookupDtos/' + id,
  //       JSON.stringify(LookupDto),
  //       this.httpOptions
  //     )
  //     .pipe(retry(1), catchError(this.errorHandlerService.logError));
  // }

  // // HttpClient API delete() method => Delete LookupDto
  // delete(id: any) {
  //   return this.http
  //     .delete<LookupDto>(this.apiURL + '/LookupDtos/' + id, this.httpOptions)
  //     .pipe(retry(1), catchError(this.errorHandlerService.logError));
  // }

}
