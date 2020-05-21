import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

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
