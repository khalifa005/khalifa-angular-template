import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NotitficationsDefaultValues, SmartTableEvents } from '../../../@core/utils/static-data/default-values';
import { ToastNotificationService } from '../../../@core/utils/toast-notification.service';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { Subscription } from 'rxjs';
import { IPaginatorModel } from '../../../@core/models/interfaces/IPaginator.interface';
import { TetsUserDataModel, ISmartTableModel } from '../../../@core/models/interfaces/ISmart-table.model';
import { Logger } from '../../../@core/utils/logger.service';
import { SmartTableComponent } from '../../tables/smart-table/smart-table.component';
import { TableCellContentComponent } from '../../tables/smart-table/table-cell-content/table-cell-content.component';
import { TicketListDto } from '../models/ticket-list.dto';

@Component({
  selector: 'ngx-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.scss']
})
export class TicketsListComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];

  @Input() tableHeaderTitle: string;
  // @Input() tableHeaderTitle: any[];

  loger = new Logger(SmartTableComponent.name);
  source: LocalDataSource = new LocalDataSource();
  itemsPerPage = [1, 2, 3, 4, 5, 6, 7];
  currentPage = 1;
  pageSize = 3;
  totalItems: number = 0;
  data: TicketListDto[] ;

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
        type: 'number',
        editable: false,
        addable: false,
        filter: false,
        compareFunction(direction: any, a: any, b: any) {
        },
      },
      title: {
        title: 'title',
        type: 'string',
        editable: false,
        addable: false,
        filter: false,
        compareFunction(direction: any, a: any, b: any) {
        },
      },
      description: {
        title: 'description',
        type: 'string',
        editable: false,
        addable: false,
        filter: false,
        compareFunction(direction: any, a: any, b: any) {
        },
      },

    },
  };

  constructor(private toastNotificationService:ToastNotificationService,
     private router: Router) {
    //consider this api
    this.buildTable();

    // this.toastNotificationService.showToast(NotitficationsDefaultValues.Primary, 'Error', 'test error');
    // this.toastNotificationService.showNotificationWithCustomIcon(NotitficationsDefaultValues.Success, 'checkmark-circle-2-outline', 'saved', 'saved item successfuly');
    // this.toastNotificationService.showError( 'Error', 'test error');
  }

  buildTable(){
    this.data = [];
    //call api and sent the params them do analysis - rset the table settings
    // this.data = this.service.getData() as TicketListDto[];

    let ticket1 = new TicketListDto(1, "test", "my first description");
    let ticket2 = new TicketListDto(2, "test 2", "my second description");
    this.data.push(ticket1 );
    this.data.push(ticket2 );

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

    this.subs.push(tableSub);
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

  ngOnDestroy() {
    this.subs.forEach((s) => s.unsubscribe());
  }



}
