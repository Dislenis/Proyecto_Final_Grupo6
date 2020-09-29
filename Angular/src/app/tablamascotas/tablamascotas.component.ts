import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../User/usuario';
import { Region } from '../User/region';
import { Mascota } from '../User/mascota';
import { Adopcion } from '../User/adopcion';
@Component({
  selector: 'app-tablamascotas',
  templateUrl: './tablamascotas.component.html',
  styleUrls: ['./tablamascotas.component.css']
})
export class TablamascotasComponent implements OnInit {

  constructor(private usuarioService:UsuarioService,private router:Router) { }
  miMascota: Mascota[] = [];

  ngOnInit(): void {
    this.buscarMascota()
    
  }

  nombre: string;
    estatura: string;
    edad: Number;
    sexo: string;
    imagen: string;
    descripcion: string;
    region: string;
    comuna: string;

    columasTablas2: string[] = [
      "id",
      "nombre",
      "estatura",
      "edad",
      "sexo",
      "descripcion",
      "region",
      "comuna"
    ]

    buscarMascota() {
      console.log("se imprime")
      this.usuarioService.getMascota().subscribe(
        mascota => this.miMascota = mascota
      )
    }
  
    eliminarMascota(id:Number){
      console.log(id);
      this.usuarioService.deleteMascota(id).subscribe(data=> this.buscarMascota());
    }

    cerrarSesion(){
      location.href="#"
    }
}
