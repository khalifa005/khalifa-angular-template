import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'ngx-table-cell-content',
  templateUrl: './table-cell-content.component.html',
  styleUrls: ['./table-cell-content.component.scss']
})
export class TableCellContentComponent implements ViewCell, OnInit {


  @Input() value: number;
  @Input() rowData: any;
  stateClass: string;
  percentage: number;
  styleWidth: string;

  constructor() {
    // this.value = this.value + 2;
   }

  ngOnInit()  {

    // console.log(this.value);
    // console.log(this.rowData);
    // this.stateClass = 'warning';
    // this.percentage = this.rowData;
    // this.styleWidth = this.percentage + '%';
  }

}
