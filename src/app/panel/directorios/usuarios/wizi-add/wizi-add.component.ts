import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-wizi-add',
  templateUrl: './wizi-add.component.html',
  styleUrls: ['./wizi-add.component.scss']
})
export class WiziAddComponent implements OnInit {

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
  constructor(private userService: UserService) {
    this.object = {
      name: '',
      last: '',
      phone: '',
      email: '',
      user: '',
    };
    this.result = '';
  }

  change(value, name) {
    this.object[name] = value;
  }

  makeid(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       this.result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    this.object.pass = this.result;
  }

  PostWizi() {
    const body = {
      fullname: this.object.name + ' ' + this.object.last,
      phone: this.object.phone,
      email: this.object.email,
    }
    console.log(body);
    this.userService.PostAdmin(body).subscribe( (data: any) => {
      console.log(data);
    })
  }

  ngOnInit() {
  }

}
