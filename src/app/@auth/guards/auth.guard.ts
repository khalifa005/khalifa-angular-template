import { Logger } from '../../@core/utils/logger.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from '../services/auth.service';
import { ToastNotificationService } from '../../@core/utils/toast-notification.service';
import { TranslateService } from '@ngx-translate/core';

const log = new Logger("Guard");

@Injectable({ providedIn: 'root' })


export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService,
    private router: Router,
    public translate: TranslateService,
    private toastNotification: ToastNotificationService) {

  }

  //canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  canActivate(): boolean {

    if (this.auth.isLoggedIn()) {
      return true;
    }
    else {
      this.router.navigateByUrl('/auth/login').then(() => {
         let title = this.translate.instant('error');
         this.toastNotification.showError('error', 'UnAuthorized Access, Please Login first');
      });

      return false;
    }
    // log.info("hi from guard");

    // return false;
  }

}
