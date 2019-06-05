import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { UsuariosComponent } from './panel/directorios/usuarios/usuarios.component';
import { ServiciosComponent } from './panel/directorios/servicios/servicios.component';
import { CarrosCategorizadosComponent } from './panel/directorios/carros-categorizados/carros-categorizados.component';
import { NuevosCarrosComponent } from './panel/directorios/nuevos-carros/nuevos-carros.component';
import { PanelComponent } from './panel/panel.component';
import { PerfilComponent } from './panel/manejo-usuario/perfil/perfil.component';
import { EstadisticaComponent } from './panel/manejo-usuario/estadistica/estadistica.component';
import { PagoComponent } from './panel/manejo-usuario/pago/pago.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuariosComponent,
    ServiciosComponent,
    CarrosCategorizadosComponent,
    NuevosCarrosComponent,
    PanelComponent,
    PerfilComponent,
    EstadisticaComponent,
    PagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
