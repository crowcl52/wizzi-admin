import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-modify',
  templateUrl: './admin-modify.component.html',
  styleUrls: ['./admin-modify.component.scss']
})
export class AdminModifyComponent implements OnInit {

  GetClients: any;
  GetClient: any;
  GetAdmins: any;
  GetAdmin: any;
  GetWizis: any;
  GetWizi: any;
  aux: any;
  options: boolean;
  search: boolean;
  GetClientServices: any;
  GetWiziServices: any;
  GetCar: any;
  GetBrand: any;
  GetModel: any;
  result: string;
  object: any;
  id: any;
  role: any;
  active: any;
  user: any;
  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.userService.GetAdmin(this.id).subscribe( data => {
      console.log(data);
      if ( data['data']['items']['0']['user']['role'] === 'administrator') {
        this.role = false;
      }
      if (data['data']['items']['0']['user']['role'] === 'super_administrator') {
        this.role = true;
      }
      this.active = data['data']['items']['0']['active'];
      this.user = data['data']['items']['0']['user']['id'];
      this.object = {
        name: data['data']['items']['0']['user']['fullname'],
        last: data['data']['items']['0']['user']['fullname'],
        phone: data['data']['items']['0']['user']['phone'].substring(1, data['data']['items']['0']['user']['phone'].lenght),
        email: data['data']['items']['0']['user']['email'],
      };
      console.log(this.object);
    });
  }

  change(value, name) {
    this.object[name] = value;
  }


  PatchUser() {
    const body = {
      fullname: this.object.name,
      phone: this.object.phone,
      email: this.object.email,
    }
    console.log(body);
    this.userService.PatchUser(this.user, body).subscribe( (data: any) => {
      Swal.fire('Bien!', 'Perfil modificado con éxito', 'success');

    })
  }
  ngOnInit() {
  }
  habledisehable(){
    this.active = !this.active;
    console.log(this.active);
    this.userService.PatchAdmin(this.id, {active: this.active.toString()}).subscribe( data => {
      console.log(data);
    });
  }
  super(){
    this.role = !this.role;
    this.userService.upgradeAdmin(this.user, this.role.toString()).subscribe( data => {
      console.log(data);
    });
  }
}
