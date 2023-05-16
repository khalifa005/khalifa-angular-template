import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'ngx-drag-filer-uploader',
  templateUrl: './drag-filer-uploader.component.html',
  styleUrls: ['./drag-filer-uploader.component.scss']
})
export class DragFilerUploaderComponent  {

  @Input() uploadProgress;
  @Input() requiredFileType:string;
  @Input() control: FormControl;
  // @Input() formcontrol: FormControl;

  files: any[] = [];
  constructor( private http: HttpClient, private host: ElementRef<HTMLInputElement> ) {
  }
  /**
   * on file drop handler
   */
  onFileDropped($event) {

    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);

    if(this.control)
    this.control.patchValue(null);

  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {

    if (this.files[index]) {

      let fileData = this.files[index];
      if(this.control)
        this.control.patchValue(fileData);
      }

      //if we want to upload it to the server when user select the files
      // const file:File = this.files[0];

      // if (file) {

      //     const formData = new FormData();

      //     formData.append("thumbnail", file);
      //     this.http.post(`${environment.serverUrl}/api/upload`, formData, {reportProgress: true, observe: 'events'})
      //     .subscribe({
      //       next: (event) => {
      //       // if (event.type === HttpEventType.UploadProgress)
      //       //   this.progress = Math.round(100 * event.loaded / event.total);
      //       // else if (event.type === HttpEventType.Response) {
      //       //   this.message = 'Upload success.';
      //       //   this.uploadFinishedEmitter.emit(event.body);
      //       // }
      //     },
      //     error: (err: HttpErrorResponse) => console.log(err)
      //   });

      // }

    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes, decimals) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

}
