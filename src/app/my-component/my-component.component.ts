import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Logger } from '../@core/utils/logger.service';

@Component({
  selector: 'ngx-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {

  private log = new Logger(MyComponentComponent.name);

  constructor(private _httpClient: HttpClient) { }

  response: {dbPath: ''};
  dbPath: string;
  showImag: boolean = false;
  ngOnInit() { // In the ngOnInit() or in the constructor
    // const el = document.getElementById('nb-global-spinner');
    // if (el) {
    //   el.style['display'] = 'none';
    // }
}

uploadFinished = (event) => {
  this.response = event;
  this.dbPath = this.response.dbPath;
  // this.dbPath = `${environment.serverUrl}/Resources/Images/${this.response.dbPath}` ;
  this.log.info("this.response.dbPath");
  this.log.info(this.response.dbPath);
  this.showImag = true;
}

public createImgPath = (filePath: string) => {
  // return `${environment.serverUrl}/Resources/Images/${filePath}`;
  return `${environment.serverUrl}/${filePath}`;
}

downloadFile(path: string): Observable<any> {
  return this._httpClient.post(`${environment.serverUrl}/api/upload/Download`, { filePath: path }, {
      observe: 'response',
      responseType: 'blob'
  });
}

saveFile(path: string, fileName: string): void {
      this.downloadFile(path)
      .subscribe((resp: any) => {
          let downloadLink = document.createElement('a');
          downloadLink.href = window.URL.createObjectURL(resp.body);
          downloadLink.setAttribute('download', fileName);
          document.body.appendChild(downloadLink);
          downloadLink.click();
          downloadLink.remove();
      });

  }

}
