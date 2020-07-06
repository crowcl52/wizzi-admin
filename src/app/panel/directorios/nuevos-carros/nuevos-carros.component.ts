import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Subscription } from 'rxjs';
import { CarBrand } from 'src/app/models/cars.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NuevosCarrosDetailComponent } from './nuevos-carros-detail/nuevos-carros-detail.component';
import { UserService } from '../usuarios/user.service';


@Component({
  selector: 'app-nuevos-carros',
  templateUrl: './nuevos-carros.component.html',
  styleUrls: ['./nuevos-carros.component.scss']
})
export class NuevosCarrosComponent implements OnInit, OnDestroy {

  cars: CarBrand[] = [];
  carsBrandSubscription: Subscription = new Subscription();

  carId = 0;
  alert = 0; 

  skipTable = 0;
  searchName = "";


  constructor( private store: Store<AppState>, private carService: CarsService, private route:Router, public dialog: MatDialog , private userService: UserService ) { }

  ngOnInit() {
    this.GetWizisPendient();
    this.getCarsTable();
  }

  getCarsTable(){
    let data = {
      where: {
        // fullname: { "contains": "car" }
      },
      skip: this.skipTable,
      limit: 10
    }
    this.carService.getCarsBrandsTable(data).subscribe( (d:any) =>{
      console.log(d.data.items);
      this.cars = d.data.items;
    })
  }

  ngOnDestroy(){
    this.carsBrandSubscription.unsubscribe();
  }

  GetWizisPendient() {
    this.userService.GetWizisPendient().subscribe( (data: any) => {
      this.alert = data.data.items.length;
    });
  }

  editCar(){
    console.log(this.carId);
  }

  goModels(id, name ){
    this.carService.getCarModel(id);
    this.route.navigate(['admin/modelos-carros',id,name]);
  }

  editBrand(id, name){
    const dialogRef = this.dialog.open(NuevosCarrosDetailComponent, {
      width: '500px',
      height: '500px',
      data: { id: id, name:name }
    });
  }

  nextPage() {
    this.skipTable += 10;
    console.log(this.skipTable);
    this.getCarsTable();
  }

  prePage() {
    this.skipTable = this.skipTable > 0 ? this.skipTable -= 10 : this.skipTable;
    console.log(this.skipTable);
    this.getCarsTable();
  }

  reset(type) {
    this.skipTable = 0;
    this.searchName = "";
    this.getCarsTable();

  }

  search() {
    this.skipTable = 0;
    let data = {
      where: {
        name: { "contains": this.searchName }
      },
      skip: this.skipTable,
      limit: 10
    }
    this.carService.getCarsBrandsTable(data).subscribe((d: any) => {
      console.log(d.data.items)
      this.cars = d.data.items;
    })
  }

}
