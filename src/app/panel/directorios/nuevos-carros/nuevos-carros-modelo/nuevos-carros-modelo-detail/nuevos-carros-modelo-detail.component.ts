import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CarsService } from 'src/app/panel/services/cars.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-nuevos-carros-modelo-detail',
  templateUrl: './nuevos-carros-modelo-detail.component.html',
  styleUrls: ['./nuevos-carros-modelo-detail.component.scss']
})
export class NuevosCarrosModeloDetailComponent implements OnInit {

  size = 1;
  carSizes = [];

  constructor(public dialogRef: MatDialogRef<NuevosCarrosModeloDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private service: CarsService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.service.getCarSizes().subscribe((data: any) => {
      console.log(data.data)
      this.carSizes = data.data.items;
    });

    this.size = this.data.size;

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editModel() {
    if (this.data.id != 0) {
      let data = { name: this.data.name, size: this.size }

      this.service.editCarModel(this.data.id, data).subscribe((cars: any) => {
        this._snackBar.open("El carro ha sido Editado con Exito", "Cerrar", {
          duration: 5000,
        });
      });

    } else {

      let data = { name: this.data.name, brand: this.data.type, size: this.size }

      this.service.AddCarModel(data).subscribe((cars: any) => {
        this._snackBar.open("El carro ha sido agregado con exito", "Cerrar", {
          duration: 5000,
        });
      });

    }


  }

}
