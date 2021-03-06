import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private token = '';

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.store.select('user').subscribe(user => {
      console.log(user.data.token);
      this.token = user.data.token;
    });
  }
  public GetClients() {
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(`https://api.wizi.mx/clients`, { headers: Header });
  }

  public GetClient(id) {
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(`https://api.wizi.mx/clients/${id}`, { headers: Header });
  }

  public GetClientTable(data) {
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.post(`https://api.wizi.mx/web/clients/`, data, { headers: Header });
  }

  public GetAdmins() {
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(`https://api.wizi.mx/administrators`, { headers: Header });
  }
  public GetAdmin(id) {
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(`https://api.wizi.mx/administrators/${id}`, { headers: Header });
  }

  public GetAdminTable(data) {
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.post(`https://api.wizi.mx/web/administrators/`, data, { headers: Header });
  }
  public GetWizisPendient() {
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(`https://api.wizi.mx/providers/?approve=false`, { headers: Header });
  }

  public GetWizis() {
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(`https://api.wizi.mx/providers`, { headers: Header });
  }

  public GetWizisTable(data) {
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.post(`https://api.wizi.mx/web/providers/`, data, { headers: Header });
  }

  public GetWizi(id) {
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(`https://api.wizi.mx/providers/${id}`, { headers: Header });
  }
  public GetClientServices(id) {
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(`https://api.wizi.mx/clients/${id}/services`, { headers: Header });
  }
  public GetWiziServices(id) {
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(`https://api.wizi.mx/clients/${id}/services`, { headers: Header });
  }
  public GetCar(id) {
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(`https://api.wizi.mx/cars/${id}`, { headers: Header });
  }
  public GetBrand(id) {
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(`https://api.wizi.mx/carbrands/${id}`, { headers: Header });
  }
  public GetModel(id) {
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(`https://api.wizi.mx/carmodels/${id}`, { headers: Header });
  }
  public DeleteAdmin(id) {
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.delete(`https://api.wizi.mx/administrators/${id}`, { headers: Header });
  }
  public DeleteWizi(id) {
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.delete(`https://api.wizi.mx/administrators/${id}`, { headers: Header });
  }
  public DeleteClient(id) {
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.delete(`https://api.wizi.mx/clients/${id}`, { headers: Header });
  }
  public PatchUser(id, body) {
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.patch(`https://api.wizi.mx/users/${id}`, body, { headers: Header });
  }
  public PatchClient(id, body) {
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.patch(`https://api.wizi.mx/clients/${id}`, body, { headers: Header });
  }
  public PatchWizi(id, body) {
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.patch(`https://api.wizi.mx/providers/${id}`, body, { headers: Header });
  }
  public PatchAdmin(id, body) {
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.patch(`https://api.wizi.mx/administrators/${id}`, body, { headers: Header });
  }
  public PostAdmin(body) {
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.post(`https://api.wizi.mx/auth/local/administrator/signup`, body, { headers: Header });
  }
  public PostWizi(body) {
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.post(`https://api.wizi.mx/administrators`, { headers: Header });
  }
  public upgradeAdmin(id, value) {
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.post(`https://api.wizi.mx/users/${id}/administrators/upgrade?upgrade=${value}`, { headers: Header });
  }

  public GetServiceTable(data) {
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.post(`https://api.wizi.mx/web/services/`, data, { headers: Header });
  }
}
