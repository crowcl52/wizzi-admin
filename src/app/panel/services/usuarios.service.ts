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
    const url = `${this.url}/users/${id}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    this.http.patch(url, data, { headers }).subscribe(data => {
      console.log(data)
    })

  }

}
