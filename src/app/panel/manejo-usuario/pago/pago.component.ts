import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.scss']
})
export class PagoComponent implements OnInit {

  nav = 'admin';
  search = false;

  services = [];

  constructor( private service: UsuariosService ) { }

  ngOnInit() {

    this.service.getPagos().subscribe( ( d: any ) =>{
      console.log(d.data.items)
      this.services = d.data.items;
    } )
  }

}
