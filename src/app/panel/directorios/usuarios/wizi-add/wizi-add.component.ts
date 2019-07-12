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
  constructor(private userService: UserService) {

  }


  GetClientsFunction(){
    this.userService.GetClients().subscribe( (data: any) => {
      console.log(data);
      this.GetClients = data.data.items;
    })
  }
  GetClientFunction(id){
    this.userService.GetClient(id).subscribe( (data: any) => {
      console.log(data);
      this.GetClient = data.data.items;
    })
  }
  GetAdminsFunction(){
    this.userService.GetAdmins().subscribe( (data: any) => {
      console.log(data);
      this.GetAdmins = data.data.items;
    })
  }
  GetAdminFunction(id){
    this.userService.GetAdmin(this.GetAdmins.id).subscribe( (data: any) => {
      console.log(data);
      this.GetAdmin = data.data.items;
    })
  }
  GetWizisFunction(){
    this.userService.GetWizis().subscribe( (data: any) => {
      console.log(data);
      this.GetWizis = data.data.items;
    })
  }
  GetWiziFunction(id){
    this.userService.GetWizi(id).subscribe( (data: any) => {
      console.log(data);
      this.GetWizi = data.data.items;
    })
  }
  GetClientServicesFunction(id){
    this.userService.GetClientServices(id).subscribe( (data: any) => {
      console.log(data);
      this.GetClientServices = data.data.items;
    })
  }
  GetWiziServicesFunction(id){
    this.userService.GetWiziServices(this.GetWizis.id).subscribe( (data: any) => {
      console.log(data);
      this.GetWiziServices = data.data.items;
    })
  }
  GetCarFunction(id){
    this.userService.GetCar(id).subscribe( (data: any) => {
      console.log(data);
      this.GetCar = data.data.items;
    })
  }
  GetBrandFunction(brand){
    this.userService.GetBrand(brand).subscribe( (data: any) => {
      console.log(data);
      this.GetBrand = data.data.items;
    })
  }
  GetModelFunction(model){
    this.userService.GetModel(model).subscribe( (data: any) => {
      console.log(data);
      this.GetModel = data.data.items;
    })
  }
  DeleteAdmin(id){
    this.userService.DeleteAdmin(id).subscribe( (data: any) => {
      console.log(data);
    })
  }
  DeleteWizi(id){
    this.userService.DeleteWizi(id).subscribe( (data: any) => {
      console.log(data);
    })
  }
  DeleteClient(id){
    this.userService.DeleteClient(id).subscribe( (data: any) => {
      console.log(data);
    })
  }
  PatchClient(id, body){
    this.userService.PatchClient(id, body).subscribe( (data: any) => {
      console.log(data);
    })
  }
  PatchWizi(id, body){
    this.userService.PatchWizi(id, body).subscribe( (data: any) => {
      console.log(data);
    })
  }
  PatchAdmin(id, body){
    this.userService.PatchAdmin(id, body).subscribe( (data: any) => {
      console.log(data);
    })
  }
  PostAdmin(body){
    this.userService.PostAdmin(body).subscribe( (data: any) => {
      console.log(data);
    })
  }
  PostWizi(body){
    this.userService.PostWizi(body).subscribe( (data: any) => {
      console.log(data);
    })
  }

  ngOnInit() {
  }

}
