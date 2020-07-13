import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ActivateUserAction, DeactivateUserAction } from '../redux/user.actions';
import Swal from 'sweetalert2';


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
    },err =>{
      console.log(err.error.error)
      let error = err.error.error.generalDetails.message;
      let msgerr =  err.error.error.generalDetails.message;

      if(error == "invalidSignin"){
       msgerr = "El usuario o la contraseña son incorrectos";
      }

      Swal.fire('Ha ocurrido un error', msgerr, 'error')

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
    location.reload();
  }

  rePassRequest(data) {
    let url = `${this.url}users/reset_password_request`;

    return this.http.post(url, data);
  }

  rePassword(data) {
    let url = `${this.url}users/reset_password`;

    return this.http.post(url, data);
  }

}
