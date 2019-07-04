import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {
  services: boolean;
  active: boolean;
  GetAdmins: any;
  search: boolean;
  constructor(private userService: UserService) {
    this.services = false;
    this.search = false;
    this.active = true;
    this.userService.GetAdmins().subscribe( (data: any) => {
      console.log(data);
      this.GetAdmins = data.data.items;
    })
  }
  ngOnInit() {
  }

}
