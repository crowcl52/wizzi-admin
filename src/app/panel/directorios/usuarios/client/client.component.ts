import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
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
  id: number;
  object: any;
  cars: any;
  car: { model: string; brand: string; color: string; };
  user: any;
  servicesData: any;
  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.services = false;
    this.active = true;
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.userService.GetClient(this.id).subscribe( data => {
      console.log(data);
      this.user = data['data']['items']['0']['user']['id'];
      this.active = data['data']['items']['0']['active'];
      this.cars = data['data']['items']['0']['cars'];
      this.servicesData = data['data']['items']['0']['services'];
      this.car = {
        model: '',
        brand: '',
        color: '',
      };
      this.object = {
        fullname: data['data']['items']['0']['user']['fullname'],
        phone: data['data']['items']['0']['user']['phone'].substring(1, data['data']['items']['0']['user']['phone'].lenght),
        email: data['data']['items']['0']['user']['email'],
      };
      console.log(this.object);
    });
  }

  ngOnInit() {
  }

  change(value, name) {
    this.object[name] = value;
  }


  PatchUser() {
    this.userService.PatchUser(this.user, this.object).subscribe( (data: any) => {
      console.log(data);
      Swal.fire('Bien!', 'Perfil modificado con éxito', 'success');

    })
  }
  habledisehable() {
    this.active = !this.active;
    console.log(this.active);
    this.userService.PatchClient(this.id, {active: this.active.toString()}).subscribe( data => {
      console.log(data);
    });
  }
}
