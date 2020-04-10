import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Redux
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { DemoMaterialModule } from './material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminAddComponent } from './panel/directorios/usuarios/admin-add/admin-add.component';
import { AdminModifyComponent } from './panel/directorios/usuarios/admin-modify/admin-modify.component';
import { ClientComponent } from './panel/directorios/usuarios/client/client.component';
import { WiziAddComponent } from './panel/directorios/usuarios/wizi-add/wizi-add.component';
import { WiziModifyComponent } from './panel/directorios/usuarios/wizi-modify/wizi-modify.component';
import { NotifyComponent } from './panel/directorios/usuarios/notify/notify.component';
import { CarrosCatDetailComponent } from './panel/directorios/carros-categorizados/carros-cat-detail/carros-cat-detail.component';
import { NuevosCarrosDetailComponent } from './panel/directorios/nuevos-carros/nuevos-carros-detail/nuevos-carros-detail.component';
import { NuevosCarrosModeloComponent } from './panel/directorios/nuevos-carros/nuevos-carros-modelo/nuevos-carros-modelo.component';
import { NuevosCarrosModeloDetailComponent } from './panel/directorios/nuevos-carros/nuevos-carros-modelo/nuevos-carros-modelo-detail/nuevos-carros-modelo-detail.component';

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
    PagoComponent,
    AdminAddComponent,
    AdminModifyComponent,
    ClientComponent,
    WiziAddComponent,
    WiziModifyComponent,
    NotifyComponent,
    CarrosCatDetailComponent,
    NuevosCarrosDetailComponent,
    NuevosCarrosModeloComponent,
    NuevosCarrosModeloDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    ChartsModule,
    StoreModule.forRoot( appReducer ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  entryComponents: [
    NuevosCarrosModeloDetailComponent,
    NuevosCarrosDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
