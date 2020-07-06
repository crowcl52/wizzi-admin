import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  nav: any;
  active: boolean;
  GetClients: any;
  GetClient: any;
  GetAdmins: any;
  GetAdmin: any;
  GetWizis: any;
  GetWizi: any;
  aux: any;
  options: boolean;
  GetClientServices: any;
  GetWiziServices: any;
  GetCar: any;
  GetBrand: any;
  GetModel: any;
  auxAdmin: any;
  auxWiz: any;
  auxClient: any;
  GetPend: any;

  // skips tables
  skipTable = 0;
  searchName = "";

  constructor(private userService: UserService, private _router: Router) {
    this.nav = 'admin';
    this.active = true;
    this.aux = -1;
    this.options = false;
    this.GetClientsFunction();
    this.GetAdminsFunction();
    this.GetWizisFunction();
    this.GetWizisPendient();
  }

  GetClientsFunction() {
    let data = {
      where: {
        // fullname: { "contains": "car" }
      },
      skip: this.skipTable,
      limit: 5
    }
    this.userService.GetClientTable(data).subscribe((d: any) => {
      console.log("Clients whit pages")
      console.log(d.data.items)
      this.GetClients = d.data.items;
      this.auxClient = this.GetClients;
    })
  }

  GetClientFunction(id) {
    this.userService.GetClient(id).subscribe((data: any) => {
      console.log(data);
      this.GetClient = data.data.items;
    });
  }

  GetAdminsFunction() {
    let data = {
      where: {
        // fullname: { "contains": "car" }
      },
      skip: this.skipTable,
      limit: 5
    }
    this.userService.GetAdminTable(data).subscribe((d: any) => {
      console.log("Admins whit pages")
      console.log(d.data.items)
      this.GetAdmins = d.data.items;
      this.auxAdmin = this.GetAdmins;
    })
  }

  GetAdminFunction(id) {
    this.userService.GetAdmin(this.GetAdmins.id).subscribe((data: any) => {
      console.log(data);
      this.GetAdmin = data.data.items;
    });
  }

  GetWizisFunction() {
    let data = {
      where: {
        // fullname: { "contains": "car" }
      },
      skip: this.skipTable,
      limit: 5
    }
    this.userService.GetWizisTable(data).subscribe((d: any) => {
      console.log("Wizzis whit pages")
      console.log(d.data.items)
      this.GetWizis = d.data.items;
      this.auxWiz = this.GetWizis;
    })
  }

  GetWiziFunction(id) {
    this.userService.GetWizi(id).subscribe((data: any) => {
      console.log(data);
      this.GetWizi = data.data.items;
    });
  }

  GetClientServicesFunction(id) {
    this.userService.GetClientServices(id).subscribe((data: any) => {
      console.log(data);
      this.GetClientServices = data.data.items;
    });
  }

  GetWiziServicesFunction(id) {
    this.userService.GetWiziServices(this.GetWizis.id).subscribe((data: any) => {
      console.log(data);
      this.GetWiziServices = data.data.items;
    });
  }

  GetWizisPendient() {
    this.userService.GetWizisPendient().subscribe((data: any) => {
      this.GetPend = data.data.items.length;
    });
  }

  GetBrandFunction(brand) {
    this.userService.GetBrand(brand).subscribe((data: any) => {
      console.log(data);
      this.GetBrand = data.data.items;
    });
  }

  GetModelFunction(model) {
    this.userService.GetModel(model).subscribe((data: any) => {
      console.log(data);
      this.GetModel = data.data.items;
    });
  }

  DeleteAdmin(id) {
    this.userService.DeleteAdmin(id).subscribe((data: any) => {
      console.log(data);
    });
  }

  DeleteWizi(id) {
    this.userService.DeleteWizi(id).subscribe((data: any) => {
      console.log(data);
    });
  }

  DeleteClient(id) {
    this.userService.DeleteClient(id).subscribe((data: any) => {
      console.log(data);
    });
  }

  PatchClient(id, body) {
    this.userService.PatchClient(id, body).subscribe((data: any) => {
      console.log(data);
    });
  }

  PatchWizi(id, body) {
    this.userService.PatchWizi(id, body).subscribe((data: any) => {
      console.log(data);
    });
  }

  PatchAdmin(id, body) {
    this.userService.PatchAdmin(id, body).subscribe((data: any) => {
      console.log(data);
    });
  }

  PostAdmin(body) {
    this.userService.PostAdmin(body).subscribe((data: any) => {
      console.log(data);
    });
  }

  PostWizi(body) {
    this.userService.PostWizi(body).subscribe((data: any) => {
      console.log(data);
    });
  }

  navigate() {
    if (this.nav === 'admin') {
      this._router.navigate(['/admin/AdminAdd']);
    }
    if (this.nav === 'wiz') {
      this._router.navigate(['/admin/WiziAdd']);
    }
  }

  editAdmin(id) {
    this._router.navigate(['/admin/AdminModify', id]);
  }

  editWizi(id) {
    this._router.navigate(['/admin/WiziModify', id]);
  }

  client(id) {
    this._router.navigate(['/admin/Client', id]);
  }

  deleteAdmin(id) {
    this.userService.DeleteAdmin(id).subscribe(data => {
      console.log(data);
    });
  }

  deleteWizi(id) {
    this.userService.DeleteWizi(id).subscribe(data => {
      console.log(data);
    });
  }

  deleteClient(id) {
    this.userService.DeleteClient(id).subscribe(data => {
      console.log(data);
    });
  }

  dishableAdmin(id) {
    this.userService.PatchAdmin(id, { active: 'false' }).subscribe((data: any) => {
      this.GetAdminsFunction();
    });
  }

  hableAdmin(id) {
    this.userService.PatchAdmin(id, { active: 'true' }).subscribe((data: any) => {
      this.GetAdminsFunction();
    });
  }

  dishableWizi(id) {
    this.userService.PatchWizi(id, { active: 'false' }).subscribe((data: any) => {
      console.log(data);
      this.GetWizisFunction()
    });
  }

  hableWizi(id) {
    this.userService.PatchWizi(id, { active: 'true' }).subscribe((data: any) => {
      console.log(data);
      this.GetWizisFunction()
    });
  }

  dishableClient(id) {
    this.userService.PatchClient(id, { active: 'false' }).subscribe((data: any) => {
      console.log(data);
      this.GetClientsFunction();
    });
  }

  hableClient(id) {
    this.userService.PatchClient(id, { active: 'true' }).subscribe((data: any) => {
      console.log(data);
      this.GetClientsFunction();
    });
  }

  ngOnInit() {
  }

  nextPage() {
    this.skipTable += 5;
    console.log(this.skipTable);

    switch (this.nav) {
      case 'admin':
        this.GetAdminsFunction();
        break;
      case 'wiz':
        this.GetWizisFunction();
        break;
      case 'client':
        this.GetClientsFunction();
        break;
    }

  }

  prePage() {
    this.skipTable = this.skipTable > 0 ? this.skipTable -= 5 : this.skipTable;
    console.log(this.skipTable);
    switch (this.nav) {
      case 'admin':
        this.GetAdminsFunction();
        break;
      case 'wiz':
        this.GetWizisFunction();
        break;
      case 'client':
        this.GetClientsFunction();
        break;
    }

  }

  reset(type) {
    this.nav = type;
    this.skipTable = 0;
    this.searchName = "";
    this.GetClientsFunction();
    this.GetAdminsFunction();
    this.GetWizisFunction();
  }

  search() {
    this.skipTable = 0;

    let data = {
      where: {
        fullname: { "contains": this.searchName }
      },
      skip: this.skipTable,
      limit: 5
    }

    if (this.nav === 'admin') {

      this.userService.GetAdminTable(data).subscribe((d: any) => {
        console.log("get Admins")
        console.log(d.data.items)
        this.GetAdmins = d.data.items;
      })
    }
    if (this.nav === 'wiz') {
      this.userService.GetWizisTable(data).subscribe((d: any) => {
        console.log(d.data.items)
        this.GetWizis = d.data.items;
      })
    } else {
      this.userService.GetClientTable(data).subscribe((d: any) => {
        console.log(d.data.items)
        this.GetClients = d.data.items;
      })
    }
  }
}
