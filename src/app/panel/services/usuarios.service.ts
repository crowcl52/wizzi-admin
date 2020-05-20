import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public url = 'https://api.wizi.mx/';
  private token;

  constructor(private http: HttpClient, private store: Store<AppState>, private authService: AuthService) {
    this.token = authService.Token;
  }

  public updateUser(data, id) {
    const url = `${this.url}users/${id}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    this.http.patch(url, data, { headers }).subscribe(data => {
      console.log(data)
    })

  }

  public getClientChar(i, f) {

    const url = `${this.url}statistics/clients/accounts/new?start_at=${i}&end_at=${f}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    return this.http.get(url, { headers })
  }

  public getprovidersChar(i, f) {

    const url = `${this.url}statistics/providers/accounts/new?start_at=${i}&end_at=${f}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    return this.http.get(url, { headers })
  }

  public getCarsChar(i, f) {

    const url = `${this.url}statistics/services/cars?start_at=${i}&end_at=${f}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    return this.http.get(url, { headers })
  }

  public getServicesChar(i, f) {

    const url = `${this.url}statistics/services/types?start_at=${i}&end_at=${f}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    return this.http.get(url, { headers })
  }

}
