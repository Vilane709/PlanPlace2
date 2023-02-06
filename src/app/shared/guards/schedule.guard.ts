import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ScheduleService } from '../services/schedule.service';

@Injectable({
  providedIn: 'root'
})
export class ScheduleGuard implements CanActivate {

  constructor(
    private scheduleService: ScheduleService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const pathDay = route.paramMap.get('weekday');

      if (pathDay === null) {
        return false;
      }

      const existDay = this.scheduleService.сheckDayPath(pathDay);

      if (existDay === false) {
        console.log(1);
        
        this.router.navigate(['day', 'mon']);
      }
      
      return existDay;
  }
  
}
