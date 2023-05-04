import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { PagerService } from '../../../@core/utils/pager.service';
import { IPaginatorModel } from '../../../@core/models/interfaces/IPaginator.interface';
import { Logger } from '../../../@core/utils/logger.service';

@Component({
  selector: 'ngx-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})

export class PaginatorComponent implements OnInit {

  loger = new Logger(PaginatorComponent.name);
  constructor(private http: HttpClient, private pagerService: PagerService) { }

  // array of all items to be paged
  // private allItems: any[];

  @Input() totalItems: number;
  @Input() currentPage: number;
  @Input() pageSize: number;
  // pager object
  // pager: any;
  pager: IPaginatorModel;

  // paged items
  pagedItems: any[];


  ngOnInit() {
    this.setPage(this.currentPage);
}

setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.totalItems, this.currentPage, this.pageSize);
    this.loger.debug(this.pager);
    // get current page of items
    // this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

}
