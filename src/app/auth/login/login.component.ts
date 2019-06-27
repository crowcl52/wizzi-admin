import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = 'loliva@mail.com';
  password = '123456789';

  constructor( private service: AuthService ,  private store: Store<AppState>, private router: Router ) { }

  ngOnInit() {
    this.store.select('user').subscribe( user => {
      if ( user.data != null ) { this.router.navigate(['admin']); }
    });
  }

  login(){
    this.service.login(this.user, this.password);
  }

}
