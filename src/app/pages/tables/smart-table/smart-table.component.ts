import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Subscription } from 'rxjs';

import { SmartTableData } from '../../../@core/data/smart-table';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { TableCellContentComponent } from './table-cell-content/table-cell-content.component';
import { Logger } from '../../../@core/utils/logger.service';
import { ISmartTableModel, TetsUserDataModel } from '../../../@core/models/interfaces/ISmart-table.model';
import { SmartTableEvents } from '../../../@core/utils/static-data/default-values';
import { IPaginatorModel } from '../../../@core/models/interfaces/IPaginator.interface';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent implements OnInit {

  loger = new Logger(SmartTableComponent.name);
  source: LocalDataSource = new LocalDataSource();
  itemsPerPage = [1, 2, 3, 4, 5, 6, 7];
  currentPage = 1;
  pageSize = 3;
  totalItems: number = 0;
  data:any[];

  settings = {
    mode: 'external',
    pager:{
      display: false,
      perPage: this.pageSize,
    },

    actions: {
      delete: false,
      add: false,
      edit: false,
  },

    columns: {
      id: {
        title: 'ID',
        type: 'custom',
      renderComponent: TableCellContentComponent,
        editable: false,
        addable: false,
        filter: false,
        compareFunction(direction: any, a: any, b: any) {

        },
        // valuePrepareFunction: (data) => { return '<p>' + data + '</p>'; },
      //   valuePrepareFunction: (cell, row) => {
      //     return `<span style="color:${cell};" >${cell}</span>`;
      // },

        sort: {
          type: 'custom',
        }

      },
      firstName: {
        title: 'First Name',
        type: 'string',
        editable: false,
        addable: false,
        filter: false,
        sort: false
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
        editable: false,
        addable: false,
        filter: false,
      },
      username: {
        title: 'Username',
        type: 'string',
        editable: false,
        addable: false,
        filter: false,
      },
      email: {
        title: 'E-mail',
        type: 'string',
        editable: false,
        addable: false,
        filter: false,
      },
      age: {
        title: 'Age',
        type: 'number',
        editable: false,
        addable: false,
        filter: false,
      },
    },
  };

  constructor(private service: SmartTableData, private router: Router) {
    //consider this api
    this.buildTable();
  }

  buildTable(){
    this.data = [];
    //call api and sent the params them do analysis - rset the table settings
    this.data = this.service.getData() as TetsUserDataModel[];
    this.loger.debug("table builder started" );
    this.totalItems = this.data.length;
    // this.source.setSort([], false);
    this.source.setPaging(this.currentPage, this.pageSize, false);
    this.source.load(this.data);
  }

  ngOnInit(){

    let tableSub = this.source.onChanged().subscribe(val =>{

      let convertedValue = val as ISmartTableModel<TetsUserDataModel>;
      this.loger.debug("table change tracker started");
      this.loger.debug(convertedValue.action)

      // this.loger.debug(convertedValue);

      if(SmartTableEvents.Refresh == convertedValue.action){
        // this.loger.debug(SmartTableEvents.Refresh);
      }
      else if(SmartTableEvents.Load == convertedValue.action)
      {
        // this.loger.debug(SmartTableEvents.Load);
      }
      else if(SmartTableEvents.Paging == convertedValue.action)
      {
        // this.loger.debug(SmartTableEvents.Paging);
        this.buildTable();
      }
      else if(SmartTableEvents.Sort == convertedValue.action)
      {
        this.loger.debug(convertedValue.sort);
        this.buildTable();
      }else
      {
        // this.loger.debug("SmartTableEvents- else")
      }
    });

  }

  onPageSizeChange(newPageSize) {
    this.pageSize = newPageSize;
    this.buildTable();
    // this.source.setPaging(this.currentPage, newPageSize, true);
  }


  onPagerChanged(eventData: { pager: IPaginatorModel }) {
    this.loger.debug("onPagerChanged");
    this.loger.debug(eventData.pager);
    // this.pageSize = eventData.pager.pageSize;
    this.currentPage  = eventData.pager.currentPage;
    this.buildTable();
    this.loger.debug("eventData.pager");
  }

}
