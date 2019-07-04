import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-wizi-modify',
  templateUrl: './wizi-modify.component.html',
  styleUrls: ['./wizi-modify.component.scss']
})
export class WiziModifyComponent implements OnInit {
  services: boolean;
  active: boolean;
  GetAdmins: any;
  constructor(private userService: UserService) {
    this.services = false;
    this.active = true;
    this.userService.GetAdmins().subscribe( (data: any) => {
      console.log(data);
      this.GetAdmins = data.data.items;
    })
  }

  ngOnInit() {
  }

}
