import { Component, OnInit } from '@angular/core';
import { Usuario } from '../User/usuario';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.css']
})
export class MisDatosComponent implements OnInit {


  constructor(private usuarioService: UsuarioService) { }



  ngOnInit(): void {
    this.MyDate();
  }

  datos: Usuario;

  id: number;

  nombre: String;
  apellido: String;
  fecha: Date;
 
  correo: String;
 

  selectID: any;

  MisDatos: Usuario[] = []

 

  columnasTabla: String[] = [
    "id",
    "nombre",
    "apellido",
    "fecha",
    "correo",
    "password",
    "genero",
    "region",
    "comuna"
  ]



  MyDate() {

    if (localStorage.getItem("idUser")) {

      let idusuario = parseInt(localStorage.getItem("idUser"));

      console.log(localStorage.getItem("idUser"))

      this.usuarioService.getConsultaId(idusuario).subscribe(
        data => {
          console.log(data);
          this.nombre = data.nombre;
          this.apellido = data.apellido;
          this.correo = data.correo;
          this.fecha = data.fecha;
        

        },

      )
      console.log(idusuario);
    } else {
      console.log("no existe")
    }

  }

  registraMascota() {
    location.href = "mascotasr";

  }
  cerrarSesion() {
    location.href = "#"
  }

  editar() {
    location.href = "editarPerfil"
  }
}