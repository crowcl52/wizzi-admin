import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { UserService } from '../usuarios/user.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  nav = 'admin';
  search = false;
  GetPend = 0

  services = [];

  constructor( private service: UsuariosService, private userService: UserService ) { }

  ngOnInit() {

    this.service.getPagos().subscribe( ( d: any ) =>{
      console.log(d.data.items)
      this.services = d.data.items;
    } )
  }

  GetWizisPendient() {
    this.userService.GetWizisPendient().subscribe( (data: any) => {
      this.GetPend = data.data.items.length;
    });
  }

}
