import { Component, OnInit } from '@angular/core';
import { NotitficationsDefaultValues } from '../../../@core/utils/static-data/default-values';
import { ToastNotificationService } from '../../../@core/utils/toast-notification.service';

@Component({
  selector: 'ngx-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.scss']
})
export class TicketsListComponent implements OnInit {

  constructor(private toastNotificationService:ToastNotificationService) { }

  ngOnInit() {
    this.toastNotificationService.showToast(NotitficationsDefaultValues.Primary, 'Error', 'test error');
    this.toastNotificationService.showNotificationWithCustomIcon(NotitficationsDefaultValues.Success, 'checkmark-circle-2-outline', 'saved', 'saved item successfuly');
    this.toastNotificationService.showError( 'Error', 'test error');
  }

}
