import { Component } from '@angular/core';
import { MockapiService } from 'src/app/servicios/api/mockapi.service';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css']
})
export class TransaccionesComponent {
transacciones:any;
constructor(public transaccionesInt:MockapiService){

}
ngOnInit(){
  this.transacciones.getTransaccionesInt().subscribe(
    (r: any) =>{this.transacciones = r; console.log(r)},

  )
}
}
