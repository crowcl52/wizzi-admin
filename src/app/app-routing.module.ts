import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PanelComponent } from './panel/panel.component';
import { UsuariosComponent } from './panel/directorios/usuarios/usuarios.component';
import { ServiciosComponent } from './panel/directorios/servicios/servicios.component';
import { AuthguardService } from './auth/authguard.service';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'', component: PanelComponent,
  //canActivate: [AuthguardService],
  children:[
    {path:'usuarios', component:UsuariosComponent},
    {path:'servicios', component:ServiciosComponent},
    {path:'carros', component:ServiciosComponent},
  ]},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
