import { Component, OnInit } from '@angular/core';
import { Sugerencia } from '../User/sugerencia';
import { UsuarioService } from '../servicios/usuario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tablasugerencia',
  templateUrl: './tablasugerencia.component.html',
  styleUrls: ['./tablasugerencia.component.css']
})
export class TablasugerenciaComponent implements OnInit {

  constructor(private usuarioService:UsuarioService,private router:Router) { }
  
  filtroNombre:string='';
  filtroApellido:string='';
  
  miSugerencia: Sugerencia[] = [];
  ngOnInit(): void {
    this.buscar()
    
  }

  nombre: string;
  apellido : string;
  correo: string;
  telefono: string;
  descripcion: string;

columnasTabla: String[] = [
  "nombre",
  "apellido",
  "correo",
  "telefono",
  "descripcion"
  
]

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
  this.usuarioService.getSugerencia(nombre, apellido).subscribe(
    sugerencia => this.miSugerencia = sugerencia
  )
}



eliminar(correo:string){
  console.log(correo);
  this.usuarioService.deleteSugerencia(correo).subscribe(data=> this.buscar());
  alert('¿Seguro quiere eliminar este mensaje?')
}
  cerrarSesion(){
    location.href="#"
  }
}
