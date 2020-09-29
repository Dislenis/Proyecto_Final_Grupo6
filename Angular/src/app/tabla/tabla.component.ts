import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../User/usuario';
import { Region } from '../User/region';
import { Mascota } from '../User/mascota';
import { Adopcion } from '../User/adopcion';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {


  constructor(private usuarioService:UsuarioService,private router:Router) { }

  miUsuario: Usuario[]  = [];
  

  Nombre: String;
  Apellido: String;
  Fecha: Date;
  Genero: String;
  Correo: string;
  Password: string;

  Provincia: string;
  Region_ID: string;

  Region: string;
  Abreviatura: string;
  Capital: string;

  Comuna: string;
  Provincia_ID: string;

    

  columnasTabla: String[] = [
    "id",
    "nombre",
    "apellido",
    "fecha",
    "correo",
    "password",
    "genero"
  ]

 
  ngOnInit(): void {
    this.buscar()
    
  }
////////////////////////////////////////////////////////////////////////////////
  buscar() {
    console.log("se imprime")
    this.usuarioService.getUsuario().subscribe(
      usuario => this.miUsuario = usuario
    )
  }


  eliminar(correo:string){
    console.log(correo);
    this.usuarioService.deleteUsuario(correo).subscribe(data=> this.buscar());
  }
  /////////////////////////////////////////////////////////////////////////////////
 
  cerrarSesion(){
    location.href="#"
  }

}

  

