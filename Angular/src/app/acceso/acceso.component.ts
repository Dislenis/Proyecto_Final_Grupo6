import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { Mascota } from '../User/mascota';
import { Carrusel } from '../User/carrusel';
import { Adopcion } from '../User/adopcion';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {
  myMascota: Mascota[] = [];

    id: Number;
    id_Mascota : Number;
    id_Usuario: Number;
    estado: string;

  constructor(private usuarioService: UsuarioService) { }

  carrusel: Carrusel[]
  pagina = 0
  pagina2 = 1
  pagina3 = 2
  pagina4 = 3
  pagina5 = 4
  pagina6 = 5
  pagina7 = 6
  pagina8 = 7

  ngOnInit(): void {
    this.buscarMascota();
  }
  nosotross() {
    location.href = "nosotros";
  }
registraMascota(){
  location.href="mascotasr";
  
}
  /*adoptame(indice) {
    switch (indice) {
      case "0":
        this.pagina++;
        location.href = "mascotas/" + this.pagina;
        break;
      case "1":
        this.pagina2++;
        location.href = "mascotas/" + this.pagina2;
        break;
      case "2":
        this.pagina3++;
        location.href = "mascotas/" + this.pagina3;
        break;
      case "3":
        this.pagina4++;
        location.href = "mascotas/" + this.pagina4;
        break;
      case "4":
        this.pagina5++;
        location.href = "mascotas/" + this.pagina5;
        break;
      case "5":
        this.pagina6++;
        location.href = "mascotas/" + this.pagina6;
        break;
      case "6":
        this.pagina7++;
        location.href = "mascotas/" + this.pagina7;
        break;
      case "7":
        this.pagina8++;
        location.href = "mascotas/" + this.pagina8;
        break;
     

    }


  }*/

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
  cerrarSesion(){
    location.href="#"

  }


  adoptame(idMascota){
   const idUsuario = localStorage.getItem('idUser')
   console.log(idMascota)
   console.log(idUsuario)
  


    let miAdopcion: Adopcion = {
      id: 0,
      id_Mascota : idMascota,
      id_Usuario: parseInt(idUsuario),
      estado: "",
      nombreMascota:"",
      nombreUsuario:""

    }
 console.log(miAdopcion)
   this.usuarioService.postAdopcion(miAdopcion).subscribe(
      res => {
        alert("Solicitud enviada, si es aceptada se le notificará mediante correo")
        console.log(res)
      },
      err => {
        alert("No se ha podido procesar la solicitud")
        console.log(err)
      }
    )
    }

    

  }


