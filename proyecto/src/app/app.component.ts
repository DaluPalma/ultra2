import { Component } from '@angular/core';
import { MockapiService } from './servicios/api/mockapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  title2 = 'transacciones';

  constructor(
    private MockapiService : MockapiService
  ){}
}


