import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'ngx-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements ControlValueAccessor  {

  fileName = '';
  @Input() uploadProgress;
  @Input() requiredFileType:string;

  @Input() formcontrol: FormControl;
  onChange: Function;


  file: File | null = null;

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    const file = event && event.item(0);
    this.file = file;
  }

  constructor( private http: HttpClient, private host: ElementRef<HTMLInputElement> ) {
  }

  writeValue( value: null ) {
    // clear file input
    this.host.nativeElement.value = '';
    this.file = null;
  }

  registerOnChange( fn: Function ) {
    this.onChange = fn;
  }

  registerOnTouched( fn: Function ) {
  }

  onFileSelected(event) {

    // if (event.target.files.length === 0) {
    //   return;
    // }

      const file:File = event.target.files[0];

      if (file) {

          this.fileName = file.name;

          const formData = new FormData();

          formData.append("thumbnail", file);


          this.http.post(`${environment.serverUrl}/api/upload`, formData, {reportProgress: true, observe: 'events'})
              .subscribe({
                next: (event) => {
                // if (event.type === HttpEventType.UploadProgress)
                //   this.progress = Math.round(100 * event.loaded / event.total);
                // else if (event.type === HttpEventType.Response) {
                //   this.message = 'Upload success.';
                //   this.uploadFinishedEmitter.emit(event.body);
                // }
              },
              error: (err: HttpErrorResponse) => console.log(err)
            });
          // upload$.subscribe();
      }

  }

  // cancelUpload() {
  //   // this.uploadSub.unsubscribe();
  //   this.reset();
  // }

  // reset() {
  //   this.uploadProgress = null;
  //   // this.uploadSub = null;
  // }

}
