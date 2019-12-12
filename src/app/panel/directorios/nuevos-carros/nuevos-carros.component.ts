import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Subscription } from 'rxjs';
import { CarBrand } from 'src/app/models/cars.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nuevos-carros',
  templateUrl: './nuevos-carros.component.html',
  styleUrls: ['./nuevos-carros.component.scss']
})
export class NuevosCarrosComponent implements OnInit, OnDestroy {

  cars: CarBrand[] = [];
  carsBrandSubscription: Subscription = new Subscription();

  carId = 0;

  constructor( private store: Store<AppState>, private carService: CarsService, private route:Router ) { 
    this.carsBrandSubscription = store.select('cars').subscribe(cars=>{
      console.log(cars.carBrand)
      this.cars = cars.carBrand;
    })
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.carsBrandSubscription.unsubscribe();
  }

  editCar(){
    console.log(this.carId);
  }

  goModels(id, name ){
    this.carService.getCarModel(id);
    this.route.navigate(['admin/modelos-carros',id,name]);
  }

}
