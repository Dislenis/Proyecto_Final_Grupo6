import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Usuario } from '../User/usuario'
import { Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { Comuna } from '../User/comuna';
import { Region } from '../User/region';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-cambiar',
  templateUrl: './cambiar.component.html',
  styleUrls: ['./cambiar.component.css']
})
export class CambiarComponent implements OnInit {

  constructor(private usuarioService:UsuarioService, private router: Router, private spinnerService: NgxSpinnerService) { }

  myUser: Region[] = [];

  myComuna: Comuna[] = [];

  miUsuario: Usuario[] = [];

  MisDatos: Usuario[] = []
  
  datos: any;

  ngOnInit(): void {
    this.editar();
    this.buscarRegion();
    this.buscarComuna();
    
    

  }

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
      this.usuarioService.putUsuario(this.Correo, miUsuario).subscribe(
        data => {
          if (data === true) {
            alert("Se ha cambiado su contraseña correctamente")
            location.href="#"
          } else {
            alert("Usuario invalido")
          }
  
  
        },
        err => console.log(err)
      )
  
    }

    buscarRegion() {
      this.usuarioService.getRegion().subscribe(
        Region => { this.myUser = Region; console.log(Region) }
      )
    }
  
    buscarComuna() {
      this.usuarioService.getComuna().subscribe(
        Comuna => { this.myComuna = Comuna; console.log(Comuna) }
      )
  
    }

    spinner():void{
      this.spinnerService.show();
      setTimeout(() =>{
        this.spinnerService.hide();
      },3000);
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

