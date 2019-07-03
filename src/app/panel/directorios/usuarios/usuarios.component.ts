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
  constructor(private userService: UserService, private _router: Router) {
    this.nav = 'admin';
    this.active = true;
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
  editAdmin(){
    this._router.navigate(['/admin/AdminModify']);
  }
  ngOnInit() {
  }

}
