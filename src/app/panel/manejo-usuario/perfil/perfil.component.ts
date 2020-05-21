import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  viewPassword = false;
  user: any;
  defaultImg = "https://www.loginradius.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png";

  constructor( private store:Store<AppState>, private service: UsuariosService ) { }

  ngOnInit() {
    this.store.select("user").subscribe( user =>{
      console.log(user.data);
      this.user = user.data;
    })
  }

  editUser(){
    console.log(this.user);
    const user = {
      fullname: this.user.fullname,
      email: this.user.email,
      phone: this.user.phone,
    };

    this.service.updateUser(user, this.user.id)
  }

}
