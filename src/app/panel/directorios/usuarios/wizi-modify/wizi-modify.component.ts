import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-wizi-modify',
  templateUrl: './wizi-modify.component.html',
  styleUrls: ['./wizi-modify.component.scss']
})
export class WiziModifyComponent implements OnInit {
  services: boolean;
  active: boolean;
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
  object: any;
  id: number;
  user: any;
  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.services = false;
    this.active = true;
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.userService.GetWizi(this.id).subscribe( data => {
      console.log(data);
      this.active = data['data']['items']['0']['active'];
      this.user = data['data']['items']['0']['user']['id'];
      this.object = {
        fullname: data['data']['items']['0']['user']['fullname'],
        phone: data['data']['items']['0']['user']['phone'].substring(1, data['data']['items']['0']['user']['phone'].lenght),
        email: data['data']['items']['0']['user']['email'],
        date: data['data']['items']['0']['user']['created_at'],
        emergency_contact_fullname: data['data']['items']['0']['user']['emergency_contact_fullname'],
        emergency_contact_relationship: data['data']['items']['0']['user']['emergency_contact_relationship'],
        emergency_contact_phone: data['data']['items']['0']['user']['emergency_contact_phone'],
        image: data['data']['items']['0']['user']['image_source'],
      };
      console.log(this.object);
    });
  }

  change(value, name) {
    this.object[name] = value;
  }


  PatchUser() {
    console.log(this.object);
    this.userService.PatchUser(this.user, this.object).subscribe( (data: any) => {
      console.log(data);
      Swal.fire('Bien!', 'Perfil modificado con éxito', 'success');

    });
  }

  ngOnInit() {
  }

  habledisehable() {
    this.active = !this.active;
    console.log(this.active);
    this.userService.PatchWizi(this.id, {active: this.active.toString()}).subscribe( data => {
      console.log(data);
    });
  }
}
