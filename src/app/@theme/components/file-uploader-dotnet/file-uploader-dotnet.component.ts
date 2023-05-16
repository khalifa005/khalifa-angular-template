import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'ngx-file-uploader-dotnet',
  templateUrl: './file-uploader-dotnet.component.html',
  styleUrls: ['./file-uploader-dotnet.component.scss']
})
export class FileUploaderDotnetComponent implements OnInit {

  // <app-upload (onUploadFinished)="uploadFinished($event)"></app-upload>
  progress: number;
  message: string;
  @Output() public uploadFinishedEmitter = new EventEmitter();

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post(`${environment.serverUrl}/api/upload`, formData, {reportProgress: true, observe: 'events'})
      .subscribe({
        next: (event) => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.uploadFinishedEmitter.emit(event.body);
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }

}
