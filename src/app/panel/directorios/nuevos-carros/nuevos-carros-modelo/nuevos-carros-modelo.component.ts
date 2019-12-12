import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { CarModel } from 'src/app/models/cars.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { NuevosCarrosModeloDetailComponent } from './nuevos-carros-modelo-detail/nuevos-carros-modelo-detail.component';


@Component({
  selector: 'app-nuevos-carros-modelo',
  templateUrl: './nuevos-carros-modelo.component.html',
  styleUrls: ['./nuevos-carros-modelo.component.scss']
})
export class NuevosCarrosModeloComponent implements OnInit,OnDestroy {

  cars: CarModel[] = [];
  carsBrandSubscription: Subscription = new Subscription();
  BrandName;
  BrandId;

  constructor( private store: Store<AppState>, private route: ActivatedRoute, public dialog: MatDialog ) { 
    this.carsBrandSubscription = store.select('cars').subscribe(cars=>{
      this.cars = cars.carModel;
    })
  }

  ngOnInit() {
    this.BrandId = this.route.snapshot.paramMap.get("id");
    this.BrandName = this.route.snapshot.paramMap.get("brand");

  }

  ngOnDestroy(){
    this.carsBrandSubscription.unsubscribe();
  }

  editModel(id, name){
    const dialogRef = this.dialog.open(NuevosCarrosModeloDetailComponent, {
      width: '500px',
      height: '500px',
      data: {type: this.BrandId, id: id, name:name}
    });
  }

}
