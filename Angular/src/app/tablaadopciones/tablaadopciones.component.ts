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

  miAdopcion: Adopcion[] = [];
  ngOnInit(): void {
    this.buscarAdopcion()
  }

  id: Number;
    id_Mascota : Number;
    id_Usuario: Number;
    estado: String;

    columasTablas3: string[] = [
      "id",
      "id_Mascota",
      "id_Usuario",
      "estado",
    ]

    buscarAdopcion(){
      console.log("se imprime")
      this.usuarioService.getAdopcion().subscribe(
        adopcion => this.miAdopcion = adopcion
      )
    }
  
    eliminarAdopcion(id:Number){
      console.log(id);
      this.usuarioService.deleteAdopcion(id).subscribe(data=> this.buscarAdopcion());
    }

    cerrarSesion(){
      location.href="#"
    }
}
