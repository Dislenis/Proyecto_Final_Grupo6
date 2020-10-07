import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Usuario } from '../User/usuario'
import { Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { Comuna } from '../User/comuna';
import { Region } from '../User/region';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  constructor(private usuarioService:UsuarioService, private router: Router, private spinnerService: NgxSpinnerService) { }

  myRegion: Region[] = [];

  myComuna: Comuna[] = [];

  miUsuario: Usuario[] = [];

  MisDatos: Usuario[] = []
  
  datos: any;
  ngOnInit(): void {
    this.buscarRegion();
    this.editar();
    
  }

  ID: Number;
    Nombre: String;
    Apellido: String;
    Fecha: Date;
    Genero: string;
    Correo: string;
    Password: string;
    id_COMUNA: Number;
  
  
  
  
    Region: number=0;
    Abreviatura: string;
    Capital: string;
  
  
    Comuna: string;
    Provincia_ID: string;
  
    Provincia: string;
    Region_ID: string;

    
  selectID:any ;

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

    editar() {


      let miUsuario: Usuario = {
        id: this.ID,
        nombre: this.Nombre,
        apellido: this.Apellido,
        fecha: this.Fecha,
        genero: this.Genero,
        correo: this.Correo,
        password: this.Password,
        id_COMUNA: this.id_COMUNA,
        region: this.Region,
        comuna: this.Comuna,
  
      }

  
    
      if (this.Correo && this.miUsuario)
      this.usuarioService.putUsuario2(this.Correo, miUsuario).subscribe(
        data => {
          if (data === true) {
            alert("Se han guardado sus cambios correctamente")
            location.href="acceso"
          } else {
            alert("Usuario invalido")
          }
  
  
        },
        err => console.log(err)
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
    registraMascota(){
      location.href="mascotasr";
      
    }
    cerrarSesion(){
      location.href="#"
    }
  
    spinner():void{
      this.spinnerService.show();
      setTimeout(() =>{
        this.spinnerService.hide();
      },2000);
    }
  
    show = false;
  hide=true;
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
  


