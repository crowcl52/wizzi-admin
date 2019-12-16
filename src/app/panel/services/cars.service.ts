import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { AuthService } from '../../auth/auth.service';
import { SetCarsBrand, SetCarsModel } from 'src/app/redux/cars.actions';

@Injectable({
  providedIn: 'root'
})

export class CarsService {

  public url = 'https://api.wizi.mx/';
  private token;

  constructor(private http: HttpClient, private store: Store<AppState>, private authService: AuthService) {
    this.token = authService.Token;
  }

  public getCarsBrands() {
    const url = `${this.url}/carbrands`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    this.http.get(url, { headers }).subscribe((cars: any) => {
      this.store.dispatch(new SetCarsBrand([...cars.data.items]));
    });
  }

  public getCarModel(id) {
    const url = `${this.url}/carmodels/bybrand/${id}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    this.http.get(url, { headers }).subscribe((cars: any) => {
      console.log(cars)
      this.store.dispatch(new SetCarsModel([...cars.data.items]));
    });
  }

  public getCarSizes() {
    const url = `${this.url}carsizes`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(url, { headers });
  }

  public AddCarBrand(data) {
    const url = `${this.url}/carbrands`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.post(url,data,{ headers });
  }

  public editCarBrand(id, data) {
    const url = `${this.url}carmodels/${id}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.patch(url,data,{ headers });
  }

  public AddCarModel(data) {
    const url = `${this.url}/carmodels`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.post(url,data,{ headers });
  }

  public editCarModel(id, data) {
    const url = `${this.url}carmodels/${id}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.patch(url,data,{ headers });
  }

  public getCarCategorized() {
    const url = `${this.url}/carscategorized`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    this.http.get(url, { headers }).subscribe((cars: any) => {
      console.log(cars)
      // this.store.dispatch(new SetCarsModel([...cars.data.items]));
    });
  }


}
