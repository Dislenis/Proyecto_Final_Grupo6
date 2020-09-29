import { Component, OnInit } from '@angular/core';
import { Mascota} from '../User/mascota';
import { UsuarioService } from '../servicios/usuario.service';
import { Region } from '../User/region';
import { Provincia } from '../User/provincia';
import { Comuna } from '../User/comuna';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mascotas-r',
  templateUrl: './mascotas-r.component.html',
  styleUrls: ['./mascotas-r.component.css']
})
export class MascotasRComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private httpClient: HttpClient) { }

  myRegion: Region[];
  myComuna: Comuna[];
  message: string;

  ngOnInit(): void {
    this.buscarRegion()
    
 
  }

  id_usuario = localStorage.getItem("idUser");

    nombre: string;
    Estatura: string;
    edad: number;
    sexo: string;
    Imagen: string;
    descripcion: string;
    id_Comunas: Number;
    selectedFile: any = File;
   
    

  Region: number=0;
  Abreviatura: string;
  Capital: string;

  comuna: string;
  Provincia_ID: string;

  Provincia: string;
  Region_ID: string;

  registraMascota() {
    location.href = "acceso";

  }

  crear(event:Event) {
     
    event.preventDefault()
    let miMascota: Mascota = {
      nombre: this.nombre,
      estatura: this.Estatura,
      edad: this.edad,
      sexo: this.sexo,
      imagen: this.Imagen,
      descripcion: this.descripcion,
      region: this.Region,
      comuna: this.comuna,
      id_Comunas: this.id_Comunas,
     
     

    }

    const uploadImageData = new FormData();
    uploadImageData.append("imageFile", this.selectedFile, this.selectedFile.name);
    uploadImageData.append("nombre", miMascota.nombre)
    uploadImageData.append("estatura", miMascota.estatura)
    uploadImageData.append("edad", miMascota.edad.toString())
    uploadImageData.append("sexo", miMascota.sexo)
    uploadImageData.append("descripcion", miMascota.descripcion)
    uploadImageData.append("region", miMascota.region.toString())
    uploadImageData.append("comuna", miMascota.comuna)
    uploadImageData.append("id_Comuna", miMascota.id_Comunas.toString())
    uploadImageData.append("id_usuario", this.id_usuario)
 
    
    this.usuarioService.postMascota(uploadImageData).subscribe(
      res => {

        alert("Mascota registrada, en mis datos podrá ver las solictudes que le lleguen de adopción")
        location.href="acceso"
        console.log(res)
      },
      err => {
        alert('No se ha podido registrar a la mascota, intente nuevamente')
        console.log(err)
      }
    )


  }


  buscarRegion() {

    this.usuarioService.getRegion().subscribe(

      Region => {
        this.myRegion = Region;
       


        this.buscarid();
        console.log(Region)
      }
    )
    }




  buscarid() {
    console.log(this.Region);
    this.usuarioService.getlistaregioncomuna(this.Region).subscribe(
      Region => {

        this.myComuna = Region; console.log(Region)
      }
    )

  }



  cargarImagen(event) {


    this.selectedFile = <File>event.target.files[0];

    console.log(this.selectedFile)

  }

cerrarSesion(){
  location.href = "#";
}

}


