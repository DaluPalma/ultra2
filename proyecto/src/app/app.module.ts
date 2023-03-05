import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pantalla/login/login.component';
import { TransaccionesComponent } from './pantalla/transacciones/transacciones.component';
import{ReactiveFormsModule, FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { MockapiService } from './servicios/api/mockapi.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TransaccionesComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MockapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
