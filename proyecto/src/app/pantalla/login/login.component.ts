import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {LoginInt} from '../../modelos/login.interface';
import{ MockapiService } from '../../servicios/api/mockapi.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
    contraseña: new FormControl('', Validators.required)
  })

  constructor(private api:MockapiService) {
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
 // ngOnInit(): void {
   // throw new Error('Method not implemented.');
  //}

 
 //onLogin(form:LoginInt){
   // this.api.loginByEmail(form).subscribe(data =>{
     // console.log(form)
    //})
    
  }
  

  

 

  

