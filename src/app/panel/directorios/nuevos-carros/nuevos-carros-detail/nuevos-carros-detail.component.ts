import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CarsService } from 'src/app/panel/services/cars.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-nuevos-carros-detail',
  templateUrl: './nuevos-carros-detail.component.html',
  styleUrls: ['./nuevos-carros-detail.component.scss']
})
export class NuevosCarrosDetailComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<NuevosCarrosDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private service: CarsService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log(this.data)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveBrand() {
    let data = {
      name: this.data.name
    }
    if (this.data.id == 0) {
      this.service.AddCarBrand(data).subscribe(data => {
        this._snackBar.open("El carro ha sido agregado con Exito", "Cerrar", {
          duration: 5000,
        });
        this.service.getCarsBrands();
      })
    } else {
      this.service.editCarBrand(this.data.id, data).subscribe(data => {
        this._snackBar.open("El carro ha sido Editado con Exito", "Cerrar", {
          duration: 5000,
        });
        this.service.getCarsBrands();
      })
    }
  }


}
