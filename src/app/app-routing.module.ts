import { NotifyComponent } from './panel/directorios/usuarios/notify/notify.component';
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
import { PerfilComponent } from './panel/manejo-usuario/perfil/perfil.component';
import { PagoComponent } from './panel/manejo-usuario/pago/pago.component';
import { CarrosCategorizadosComponent } from './panel/directorios/carros-categorizados/carros-categorizados.component';
import { CarrosCatDetailComponent } from './panel/directorios/carros-categorizados/carros-cat-detail/carros-cat-detail.component';
import { NuevosCarrosComponent } from './panel/directorios/nuevos-carros/nuevos-carros.component';
import { NuevosCarrosModeloComponent } from './panel/directorios/nuevos-carros/nuevos-carros-modelo/nuevos-carros-modelo.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin', component: PanelComponent,
    canActivate: [AuthguardService],
    children: [
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'notify', component: NotifyComponent },
      { path: 'AdminAdd', component: AdminAddComponent },
      { path: 'AdminModify/:id', component: AdminModifyComponent },
      { path: 'Client/:id', component: ClientComponent },
      { path: 'WiziAdd', component: WiziAddComponent },
      { path: 'WiziModify/:id', component: WiziModifyComponent },
      { path: 'servicios', component: ServiciosComponent },
      { path: 'carros-categorizados', component: CarrosCategorizadosComponent },
      { path: 'carros-categorizados/:id', component: CarrosCatDetailComponent },
      { path: 'nuevos-carros', component: NuevosCarrosComponent },
      { path: 'modelos-carros/:id/:brand', component: NuevosCarrosModeloComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'pagos', component: PagoComponent },
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
