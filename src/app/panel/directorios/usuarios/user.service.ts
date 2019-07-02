import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private token = '';

  constructor(private http:HttpClient, private store: Store<AppState>) {
    this.store.select('user').subscribe( user => {
      console.log(user.data.token);
      this.token = user.data.token;
    });
   }
   public GetClients(){
     const Header = new HttpHeaders({
       'Authorization': 'Bearer ' + this.token
     });
     return this.http.get(`https://api.wizi.mx/users`, { headers: Header });
   }
   public GetAdmins(){
     const Header = new HttpHeaders({
       'Authorization': 'Bearer ' + this.token
     });
     return this.http.get(`https://api.wizi.mx/users`, { headers: Header });
   }
   public GetWizis(){
     const Header = new HttpHeaders({
       'Authorization': 'Bearer ' + this.token
     });
     return this.http.get(`https://api.wizi.mx/users`, { headers: Header });
   }
}
