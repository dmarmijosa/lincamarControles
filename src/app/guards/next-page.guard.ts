import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HorarioService } from '../services/horario.service';

@Injectable({
  providedIn: 'root'
})

export class NextPageGuard implements CanActivate {
  constructor(private horarioService:HorarioService, private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.horarioService.horario.nombre){
        this.router.navigate(['']);
        return false;
      }else{
        return true;
      }

  }
}
