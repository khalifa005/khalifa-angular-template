import { Logger } from '../../@core/utils/logger.service';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

const log = new Logger('home');

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent  implements OnInit {

  constructor(private router:Router,
    private translateService: TranslateService) {};

  user!: { firstName: string; lastName: string; };
  ngOnInit(): void {
    log.info(this.translateService.translations);
    this.user = { firstName: 'mahmoud', lastName: 'khalifa' };
  }

}
