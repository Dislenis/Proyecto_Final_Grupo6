import { Component, OnInit } from '@angular/core';
import { Usuario } from '../User/usuario'
import { Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private usuarioService:UsuarioService, private router: Router, private spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
   this.verificar();
  
   
  }
  correo:string;
  miUsuario: Usuario[] = [];


    ID: Number;
    Nombre: String;
    Apellido: String;
    Fecha: Date;
    Genero: string;
    Correo: string;
    Password: string;
    id_COMUNA: Number;
  
  
  
  
    Region: any;
    Abreviatura: string;
    Capital: string;
  
  
    Comuna: string;
    Provincia_ID: string;
  
    Provincia: string;
    Region_ID: string;

    
  verificar(){
    if (this.correo)
    this.usuarioService.getConsulta(this.correo).subscribe(
      data => {
        if (data === true) {
          alert("Se le ha enviado un correo de verificación, por favor revise su bandeja y siga las instruccionas ")
          location.href="#"
        } else {
          alert("Usuario invalido")
        }


      },
      err => console.log(err)
    )

  }
  spinner():void{
    this.spinnerService.show();
    setTimeout(() =>{
      this.spinnerService.hide();
    },4000);
  }

 
}
