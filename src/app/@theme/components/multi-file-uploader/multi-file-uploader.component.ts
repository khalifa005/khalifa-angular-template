import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'ngx-multi-file-uploader',
  templateUrl: './multi-file-uploader.component.html',
  styleUrls: ['./multi-file-uploader.component.scss']
})
export class MultiFileUploaderComponent implements OnInit {

// <app-upload (onUploadFinished)="uploadFinished($event)"></app-upload>
progress: number;
message: string;
@Output() public uploadMultipleFinishedEmitter = new EventEmitter();

constructor(private http: HttpClient) { }

ngOnInit() {
}

// uploadFile = (files) => {
//   if (files.length === 0) {
//     return;
//   }

//   let fileToUpload = <File>files[0];
//   const formData = new FormData();
//   formData.append('file', fileToUpload, fileToUpload.name);

//   this.http.post(`${environment.serverUrl}/api/upload/multiple`, formData, {reportProgress: true, observe: 'events'})
//     .subscribe({
//       next: (event) => {
//       if (event.type === HttpEventType.UploadProgress)
//         this.progress = Math.round(100 * event.loaded / event.total);
//       else if (event.type === HttpEventType.Response) {
//         this.message = 'Upload success.';
//         this.uploadFinishedEmitter.emit(event.body);
//       }
//     },
//     error: (err: HttpErrorResponse) => console.log(err)
//   });
// }

uploadFile = (files) => {
  if (files.length === 0) {
    return;
  }

  let filesToUpload : File[] = files;
  const formData = new FormData();

  Array.from(filesToUpload).map((file, index) => {
    return formData.append('file'+index, file, file.name);
  });

  this.http.post(`${environment.serverUrl}/api/upload/multiple`, formData, {reportProgress: true, observe: 'events'})
    .subscribe(
      {next: (event) => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / event.total);
      else if (event.type === HttpEventType.Response) {
        this.message = 'Upload success.';
        this.uploadMultipleFinishedEmitter.emit(event.body);
      }
    },
    error: (err: HttpErrorResponse) => console.log(err)
  });
}


}
