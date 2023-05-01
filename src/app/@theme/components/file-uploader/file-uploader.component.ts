import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';

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

  constructor( private host: ElementRef<HTMLInputElement> ) {
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

      const file:File = event.target.files[0];

      if (file) {

          this.fileName = file.name;

          const formData = new FormData();

          formData.append("thumbnail", file);

          // const upload$ = this.http.post("/api/thumbnail-upload", formData);

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
