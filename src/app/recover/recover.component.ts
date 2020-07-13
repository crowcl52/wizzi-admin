import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss']
})
export class RecoverComponent implements OnInit {

  newpass = "";
  token = "";


  constructor( private service: AuthService, private route:Router, private router: ActivatedRoute, ) { }

  ngOnInit() {
    this.token = this.router.snapshot.paramMap.get("id");
    console.log(this.token);
  }

  newPass() {

    let data = {
      password: this.newpass,
      token: this.token
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
