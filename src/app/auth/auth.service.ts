import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ActivateUserAction, DeactivateUserAction } from '../redux/user.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url = 'https://api.wizi.mx/';
  private urlLogin = 'auth/local/signin';

  public loginSubscription: Subscription = new Subscription();
  public user: any = null;

  public Token = '';

  constructor( private http: HttpClient, private store: Store<AppState>, private route: Router ) { }

  login(email, password){
    const url = `${this.url}${this.urlLogin}`;
    const credential = { email_or_phone:email, password };
    this.loginSubscription = this.http.post(url, credential).subscribe((data: any) => {
      this.user = data.data.items[0];
      this.Token = data.data.items[0].token;
      this.store.dispatch(new ActivateUserAction({ ...data.data.items[0] }));
      this.route.navigate(['admin']);
    });
  }

  isAuth(): boolean {
    console.log(this.user)
    if (this.user != null) {
      return true;
    } else {
      this.route.navigate(['login']);
      return false;
    }
  }

  logout() {
    this.loginSubscription.unsubscribe();
    this.store.dispatch(new DeactivateUserAction());
  }

}
