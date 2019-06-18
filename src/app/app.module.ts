import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Redux
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { DemoMaterialModule } from './material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


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
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    StoreModule.forRoot( appReducer ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
