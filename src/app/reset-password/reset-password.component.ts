import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  email = "";
  newpass = "";
  rePassSucc = false;
  loading = false;
  tokenre = "";

  constructor(private service: AuthService, private route:Router) { }

  ngOnInit() {
  }

  rePass() {
    let data = {
      email: this.email
    }
    this.loading = true;

    this.service.rePassRequest(data).subscribe((d: any) => {
      this.rePassSucc = true;
      this.loading = false;
      this.tokenre = d.data.items[0].dev_only_token;
    }, err => {
      this.loading = false;
      Swal.fire({
        icon: 'error',
        title: 'Ha ocurrido un error',
        text: err.error.error.errors[0].message,
      });
    })
  }

  newPass() {

    let data = {
      password: this.newpass,
      token: this.tokenre
    }

    console.log(data)

    this.service.rePassword(data).subscribe(d => {
      console.log(d);
      Swal.fire({
        icon: 'success',
        title: 'Listo',
        text: "Su Contraseña ha sido cambiada",
      });
      this.route.navigate(['landing']);

    }, err => {
      console.log(err)
      Swal.fire({
        icon: 'error',
        title: 'Ha ocurrido un error',
        text: err.error.error.errors[0].message,
      });
    });
  }

}
