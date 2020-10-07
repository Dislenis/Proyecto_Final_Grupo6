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

  filtroNombre:string='';
  filtroApellido:string='';
 
  

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
    let nombre = this.filtroNombre;
    let apellido = this.filtroApellido;
    if(nombre.trim() === ''){    //trim te saca los espacios
       nombre = '%20'
    }
    if(apellido.trim() === ''){
      apellido = '%20'
    }
    this.usuarioService.getUsuario(nombre, apellido).subscribe(
      usuario => this.miUsuario = usuario
    )
  }


  eliminar(correo:string){
    console.log(correo);
    this.usuarioService.deleteUsuario(correo).subscribe(data=> this.buscar());
    alert('¿Seguro quiere eliminar al usuario?')
  }
  /////////////////////////////////////////////////////////////////////////////////
 
  cerrarSesion(){
    location.href="#"
  }

}

  

