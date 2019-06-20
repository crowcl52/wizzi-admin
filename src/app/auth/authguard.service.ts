import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthguardService  implements CanActivate {

  constructor( private authService: AuthService ) { }

  canActivate(){
    return this.authService.isAuth();
  }
}
