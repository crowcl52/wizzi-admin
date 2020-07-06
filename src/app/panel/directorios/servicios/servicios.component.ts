import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { UserService } from '../usuarios/user.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  nav = 'admin';
  GetPend = 0
  skipTable = 0;
  searchName = "";

  services = [];

  constructor(private service: UsuariosService, private userService: UserService) { }

  ngOnInit() {
    this.getServices();
  }

  getServices() {

    let data = {
      where: {
        // fullname: { "contains": "car" }
      },
      skip: this.skipTable,
      limit: 10
    }
    this.userService.GetServiceTable(data).subscribe((d: any) => {
      console.log("Services")
      console.log(d.data.items)
      this.services = d.data.items;
      this.services = d.data.items;

    })
  }

  GetWizisPendient() {
    this.userService.GetWizisPendient().subscribe((data: any) => {
      this.GetPend = data.data.items.length;
    });
  }

  nextPage() {
    this.skipTable += 10;
    console.log(this.skipTable);
    this.getServices();
  }

  prePage() {
    this.skipTable = this.skipTable > 0 ? this.skipTable -= 10 : this.skipTable;
    console.log(this.skipTable);
    this.getServices();
  }

  reset(type) {
    this.nav = type;
    this.skipTable = 0;
    this.searchName = "";
    this.getServices();

  }

  search() {

    let data = {
      where: {
        fullname: { "contains": this.searchName }
      },
      skip: this.skipTable,
      limit: 10
    }
    this.userService.GetServiceTable(data).subscribe((d: any) => {
      console.log("Services")
      console.log(d.data.items)
      this.services = d.data.items;
    })
  }

}
