import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { CarsService } from './services/cars.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  constructor( private carsService:CarsService, private authService: AuthService ) { }

  ngOnInit() {
    this.carsService.getCarsBrands();
  }

  logout(){
    location.reload()
  }

}
