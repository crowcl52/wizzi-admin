import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
nav: any;
active: boolean;
client: any;
  constructor(private userService: UserService) {
    this.nav = 'admin';
    this.active = true;
    this.userService.GetUsers().subscribe( (data: any) => {
      console.log(data);
      this.client = data.data.items;
    })
  }

  ngOnInit() {
  }

}
