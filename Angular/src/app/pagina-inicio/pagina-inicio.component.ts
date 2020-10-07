import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Usuario } from '../User/usuario'
import { Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { Mascota } from '../User/mascota';
import { MascotasComponent } from '../mascotas/mascotas.component';
import { Carrusel } from '../User/carrusel';


@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {

  hide=true;

  myMascota: import("../User/mascota").Mascota[];

  constructor(private usuarioService: UsuarioService, private router: Router) { }
  public login: boolean = false

  ngOnInit(): void {
    this.ingresar();
    this.buscarMascota();
  }
  correo: string;
  password: string;



  registrar() {
    location.href = "registro";
  }

  carrusel: Carrusel[]


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


  columnasTabla: String[] = [
  ]
  miUsuario: Usuario[] = [];

  ingresar() {
    if (this.correo == 'administrador@gmail.com' && this.password == '123456') {
      location.href = "table"
   
        } else if  (this.correo && this.password)
          this.usuarioService.getExisteUsuario(this.correo, this.password).subscribe(
            data => {
              console.log(data)
              if (typeof data !== "undefined") {
                localStorage.setItem('idUser', data.id.toString());
                location.href = "acceso"
          } else {
            alert("Usuario invalido")
          }


        },
        err => console.log(err)
      )

  }
  goRegister() {
    this.router.navigate(['registro']);
  }

  goList() {
    this.router.navigate(['acceso']);
  }



  nosotross() {
    location.href = "nosotros";
  }
  buscarMascota() {
    this.usuarioService.getMascota().subscribe(
      Mascota => {

        let carrucelMascota = [];

        Mascota.forEach(function (item, i) {
          if (i === 0) {
            const valor = {
              imagen: item.imagen,
              active: "active"
            }
            carrucelMascota.push(valor)
          } else {
            const valor = {
              imagen: item.imagen,
              active: ""
            }
            carrucelMascota.push(valor)
          }

        }
        );

        this.carrusel = carrucelMascota;

        this.myMascota = Mascota;

        console.log(Mascota)

      }
    )
  }
  miLista: Usuario[] = [];
  columnaTabla: string[] = [
    "correo",
    "password"
  ]

  olvidoPassword() {
    location.href = 'editar'
  }

  show = false;
  
 
 
  @ViewChild('showhideinput') input:ElementRef; ;
  
  toggleShow()
    {
      if(this.input.nativeElement.type=='text'){
        this.input.nativeElement.type='password';
      }else{
        this.input.nativeElement.type='text';
      }
      
    
 
  }
}