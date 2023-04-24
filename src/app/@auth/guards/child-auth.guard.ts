import { Logger } from '../../@core/utils/logger.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

const log = new Logger("child-guard");

@Injectable({providedIn:'root'})

export class ChildAuthGuard implements CanActivateChild {

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    log.info("hi from child guard");

    return false;
  }


}
