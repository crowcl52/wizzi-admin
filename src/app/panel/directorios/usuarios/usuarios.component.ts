import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
nav: any;
active: boolean;
  constructor() {
    this.nav = 'admin';
    this.active = true;
  }

  ngOnInit() {
  }

}
