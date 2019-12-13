import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private route: ActivatedRoute, private userService: UserService) {
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
  ngOnInit() {
  }

}
