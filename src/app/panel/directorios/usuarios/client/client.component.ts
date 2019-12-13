import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.services = false;
    this.active = true;
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.userService.GetWizi(this.id).subscribe( data => {
      console.log(data);
      this.object = {
        name: data['data']['items']['0']['fullname'],
        last: data['data']['items']['0']['fullname'],
        phone: data['data']['items']['0']['phone'],
        email: data['data']['items']['0']['email'],
      };
      console.log(this.object);
    });
  }

  ngOnInit() {
  }

  change(value, name) {
    this.object[name] = value;
  }


  PatchUser(){
    const body = {
      fullname: this.object.name + ' ' + this.object.last,
      phone: this.object.phone,
      email: this.object.email,
    }
    console.log(body);
    this.userService.PatchUser(this.id, body).subscribe( (data: any) => {
      console.log(data);
    })
  }
}
