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
  Getwizi: any;
  constructor(private userService: UserService) {
    this.services = false;
    this.search = false;
    this.active = true;
    this.userService.GetWizisPendient().subscribe( (data: any) => {
      console.log(data);
      this.GetAdmins = data.data.items;
    });
    this.userService.GetWizis().subscribe( (data: any) => {
      console.log(data);
      this.Getwizi = data.data.items;
    });
  }
  ngOnInit() {
  }
  reject(id) {
    this.userService.PatchWizi(id, {approve: 'false'}).subscribe( data => {
      console.log(data);
    });
  }
  accept(id) {
    this.userService.PatchWizi(id, {approve: 'true'}).subscribe( data => {
      console.log(data);
    });
  }
}
