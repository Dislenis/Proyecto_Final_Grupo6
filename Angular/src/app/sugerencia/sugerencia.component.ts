import { Component, OnInit } from '@angular/core';
import { Usuario } from '../User/usuario'
import { Sugerencia } from '../User/sugerencia';
import { UsuarioService } from '../servicios/usuario.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-sugerencia',
  templateUrl: './sugerencia.component.html',
  styleUrls: ['./sugerencia.component.css']
})
export class SugerenciaComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  
  
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  descripcion: string;


  columnasTabla: String[] = [
  ]


  crear() {


    let miSugerencia: Sugerencia = {
      
      nombre: this.nombre,
      apellido: this.apellido,
      correo: this.correo,
      telefono: this.telefono,
      descripcion: this.descripcion
     
    }
 console.log(miSugerencia)
   this.usuarioService.crearSugerencia(miSugerencia).subscribe(
      res => {
        alert("Se ha enviado su mensaje correctamente")
        console.log(res)
      },
      err => {
        alert("No se ha podido procesar el mensaje")
        console.log(err)
      }
    )



  }
  cerrarSesion(){
    location.href = "#";
  }

  registraMascota(){
    location.href="mascotasr";
    
  }
}
