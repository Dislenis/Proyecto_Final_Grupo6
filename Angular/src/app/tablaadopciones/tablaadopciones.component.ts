import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../User/usuario';
import { Region } from '../User/region';
import { Mascota } from '../User/mascota';
import { Adopcion } from '../User/adopcion';
@Component({
  selector: 'app-tablaadopciones',
  templateUrl: './tablaadopciones.component.html',
  styleUrls: ['./tablaadopciones.component.css']
})
export class TablaadopcionesComponent implements OnInit {

  constructor(private usuarioService:UsuarioService,private router:Router) { }
  
  filtroUsuario:string='';
  filtroMascota:string='';
  filtroEstado:string ='';
 
  miAdopcion: Adopcion[] = [];
  ngOnInit(): void {
    this.buscarAdopcion()
  }

    id: Number;
    nombreMascota : string;
    nombreUsuario: string;
    estado: String;

    columasTablas3: string[] = [
      "id",
      "nombreMascota",
      "nombreUsuario",
      "estado",
    ]

    buscarAdopcion(){
      console.log("se imprime")
      let nombreMascota = this.filtroMascota;
      let nombreUsuario = this.filtroUsuario;
      let estado = this.filtroEstado;
      if(nombreMascota.trim() === ''){
        nombreMascota = '%20'
      }
      if(nombreUsuario.trim() === ''){
        nombreUsuario = '%20'
      }
      if(estado.trim() === ''){
        estado = '%20'
      }
      this.usuarioService.getAdopcion2(nombreMascota, nombreUsuario, estado).subscribe(
        adopcion => this.miAdopcion = adopcion
      )
    }
  
    eliminarAdopcion(id:Number){
      console.log(id);
      this.usuarioService.deleteAdopcion(id).subscribe(data=> this.buscarAdopcion());
      alert('¿Seguro quiere eliminar la adopción?')
    }

    cerrarSesion(){
      location.href="#"
    }
}
