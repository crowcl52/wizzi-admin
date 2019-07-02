import { WiziModifyComponent } from './panel/directorios/usuarios/wizi-modify/wizi-modify.component';
import { WiziAddComponent } from './panel/directorios/usuarios/wizi-add/wizi-add.component';
import { AdminModifyComponent } from './panel/directorios/usuarios/admin-modify/admin-modify.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PanelComponent } from './panel/panel.component';
import { UsuariosComponent } from './panel/directorios/usuarios/usuarios.component';
import { ServiciosComponent } from './panel/directorios/servicios/servicios.component';
import { AuthguardService } from './auth/authguard.service';
import { AdminAddComponent } from './panel/directorios/usuarios/admin-add/admin-add.component';
import { ClientComponent } from './panel/directorios/usuarios/client/client.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin', component: PanelComponent,
    canActivate: [AuthguardService],
    children: [
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'AdminAdd', component: AdminAddComponent },
      { path: 'AdminModify', component: AdminModifyComponent },
      { path: 'Client', component: ClientComponent },
      { path: 'WiziAdd', component: WiziAddComponent },
      { path: 'WiziModify', component: WiziModifyComponent },
      { path: 'servicios', component: ServiciosComponent },
      { path: 'carros', component: ServiciosComponent },
      { path: '**', redirectTo: 'usuarios' }
    ]
  },
  { path: '**', redirectTo: 'admin' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
