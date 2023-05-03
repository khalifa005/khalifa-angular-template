import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Subscription } from 'rxjs';

import { SmartTableData } from '../../../@core/data/smart-table';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent implements OnInit {

  showPerPage = 10;
  currentPage = 1;
  totalCount;
  pageSize = 30;

  settings = {
    mode: 'external',
    pager:{
      display: true,
      perPage: this.showPerPage,
    },

    actions: {
      delete: false,
      add: false,
      edit: false,
  },

    columns: {
      id: {
        title: 'ID',
        type: 'number',
        editable: false,
        addable: false,
        filter: false,
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

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData, private router: Router) {
    //consider this api
    // this.initData();
    const data = this.service.getData();

    this.source.setSort( [],false)
    this.source.load(data);

  }

  ngOnInit(){
    let tst = this.source.getElements();
    // this.initOnChagedData();
    // let sd = this.source.onUpdated().subscribe(val =>{
    //   let test = val;
    // });



    let dsdsdsd = this.source.onChanged().subscribe(val =>{
      let test =
      val;
    });

    // let dsdsd = this.source.getElements().then(val =>{
    //   let test = val;
    // });

  }



  initData(){
    // this.source = new LocalDataSource();
    // this.service.getClients(this.currentPage, this.pageSize).subscribe( (result: HttpResponse<any>) => {
    //   if(!result){
    //     return;
    //   }
    //   this.source.load(result.body);
    //   this.totalCount = JSON.parse(result.headers.get("X-Pagination"));
    //   this.totalCount = this.totalCount["totalCount"];
    //   console.log(this.source.count());
    // }
    // )
  }

  // initOnChagedData(){
  //   this.source.onChanged().subscribe((change) => {
  //     if (change.action === 'page') {
  //       this.pageChange(change.paging.page);
  //     }
  //   });
  // }

  // pageChange(pageIndex) {
  //   var getNew = pageIndex * this.showPerPage;
  //   if( getNew >= this.source.count() && getNew < this.totalCount){
  //     this.currentPage = this.currentPage + 1;
  //     this.service.getClients(this.currentPage, this.pageSize).subscribe( result => {
  //       if(!result){
  //         return;
  //       }
  //       result.body.forEach(element => {
  //         this.source.add(element);
  //       });
  //     })
  //   }
  // }

}
