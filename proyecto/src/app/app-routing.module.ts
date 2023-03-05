import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pantalla/login/login.component';
import {TransaccionesComponent} from './pantalla/transacciones/transacciones.component';


const routes: Routes = [
  { path: ' ', redirectTo:'login' , pathMatch:'full'},
  { path:'login', component:LoginComponent},
  { path:'transacciones', component:TransaccionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[ LoginComponent,TransaccionesComponent]
