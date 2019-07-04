import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
nav: any;
active: boolean;
GetClients: any;
GetAdmins: any;
GetWizis: any;
  aux: any;
  options: boolean;
  search: boolean;
  constructor(private userService: UserService, private _router: Router) {
    this.nav = 'admin';
    this.active = true;
    this.search = false;
    this.aux = -1;
    this.options = false;
    this.userService.GetClients().subscribe( (data: any) => {
      console.log(data);
      this.GetClients = data.data.items;
    })
    this.userService.GetAdmins().subscribe( (data: any) => {
      console.log(data);
      this.GetAdmins = data.data.items;
    })
    this.userService.GetWizis().subscribe( (data: any) => {
      console.log(data);
      this.GetWizis = data.data.items;
    })
  }
  navigate(){
    if(this.nav === 'admin'){
      this._router.navigate(['/admin/AdminAdd']);
    }
    if(this.nav === 'wiz'){
      this._router.navigate(['/admin/WiziAdd']);
    }
  }
  editAdmin(id){
    this._router.navigate(['/admin/AdminModify', id]);
  }
  editWizi(id){
    this._router.navigate(['/admin/WiziModify', id]);
  }
  client(id){
    this._router.navigate(['/admin/Client', id]);
  }
  ngOnInit() {
  }

}
