import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

    if (environment.production) {
    }


   }


   public get = (url: string, options?: any): Observable<any> => this.http.get(url, options);

  public post = (url: string, data: any, options?: any): Observable<any> => this.http.post(url, data, options);

  public put = (url: string, data: any, options?: any): Observable<any> => this.http.put(url, data, options);

  public delete = (url: string, options?: any): Observable<any> => this.http.delete(url, options);

}


//how to use them

  // CRUD > Read, map to REST/HTTP GET
  // read(id: any): void {
  //   this.apiHttpService.get(this.apiEndpointsService.getPositionByIdEndpoint(id), id).subscribe(
  //     //Assign resp to class-level model object.
  //     (resp: DataResponsePosition) => {
  //       //Assign data to class-level model object.
  //       this.position = resp.data;
  //       //Populate reactive form controls with model object properties.
  //       this.entryForm.setValue({
  //         id: this.position.id,
  //         positionNumber: this.position.positionNumber,
  //         positionTitle: this.position.positionTitle,
  //         positionDescription: this.position.positionDescription,
  //         positionSalary: this.position.positionSalary,
  //       });
  //     },
  //     (error) => {
  //       log.debug(error);
  //     }
  //   );
  // }
  // // CRUD > Delete, map to REST/HTTP DELETE
  // delete(id: any): void {
  //   this.apiHttpService.delete(this.apiEndpointsService.deletePositionByIdEndpoint(id), id).subscribe(
  //     (resp: any) => {
  //       log.debug(resp);
  //       this.showToaster('Great job!', 'Data is deleted');
  //       this.entryForm.reset();
  //       this.isAddNew = true;
  //     },
  //     (error) => {
  //       log.debug(error);
  //     }
  //   );
  // }

  // // CRUD > Create, map to REST/HTTP POST
  // create(data: any): void {
  //   this.apiHttpService.post(this.apiEndpointsService.postPositionsEndpoint(), data).subscribe((resp: any) => {
  //     this.id = resp.data; //guid return in data
  //     this.showToaster('Great job!', 'Data is inserted');
  //     this.entryForm.reset();
  //   });
  // }

  // // CRUD > Update, map to REST/HTTP PUT
  // put(id: string, data: any): void {
  //   this.apiHttpService.put(this.apiEndpointsService.putPositionsPagedEndpoint(id), data).subscribe((resp: any) => {
  //     this.id = resp.data; //guid return in data
  //   });
  // }



  ///old amana

  // GetEmployeeServiceTasksHistory(currentPage, pageSize, orderName, orderDirection, data): Observable<CustomAPIResponseGenaric<CustomPagedListModel<HistoryTaskListDto>>> {
  //   let httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //   });

  //   let options = { headers: httpHeaders, };

  //   let endpoint = CustomApiEndPoint.Employee.AmanaService.QueryHistoricTasksPerServiceApi.replace(
  //     CustomApiEndPointQueryParamRegx.page, currentPage)
  //     .replace(CustomApiEndPointQueryParamRegx.limit, pageSize)
  //     .replace(CustomApiEndPointQueryParamRegx.orderName, orderName)
  //     .replace(CustomApiEndPointQueryParamRegx.orderDirection, orderDirection);

  //   return this.http.post<CustomAPIResponseGenaric<CustomPagedListModel<HistoryTaskListDto>>>(endpoint, data, options);
  // }


  // let getEmployeeActiveRequestsSub = this.amanahServicesService
  // .GetEmployeeServiceTasksHistory(
  //   this.currentPage,
  //   this.pageSize,
  //   this.sortName,
  //   this.sortDirection,
  //   filterData
  // )
  // .subscribe((res) => {
  //   this.spinner.hide();
  //   this.dataSource.data = res.data?.data as HistoryTaskListDto[];
  //   this.processInstanceId = this.helpers.ListFirstOrDefault(this.dataSource.data)?.processInstanceId;
  //   this.paginator.pageIndex = this.currentPage;
  //   this.paginator.length = res.data?.length ?? 0;

  //   this.paginator._intl.itemsPerPageLabel = ` العدد الكلي ${this.paginator.length}`;
  //   this.paginator._intl.nextPageLabel = 'التالي';
  //   this.paginator._intl.previousPageLabel = 'السابق';

  //   this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
  //     return ` صفحة رقم ${this.currentPage + 1} من ${res.data?.pages ?? 1}`;
  //   };
  //   //(page, size, length) => `Page ${page} of ${length / size}`
  //   this.updateGoto();
  //   this.isLoading = false;
  // },
  //   (erorr) => {
  //     this.spinner.hide();
  //     this.isLoading = false;
  //   });
