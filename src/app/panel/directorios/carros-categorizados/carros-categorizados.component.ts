import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-carros-categorizados',
  templateUrl: './carros-categorizados.component.html',
  styleUrls: ['./carros-categorizados.component.scss']
})
export class CarrosCategorizadosComponent implements OnInit {

  constructor(private service: CarsService) { }

  ngOnInit() {
    this.service.getCarCategorized();
  }

}
