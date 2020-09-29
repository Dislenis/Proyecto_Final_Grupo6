import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nosotross(){
    location.href = "nosotros";
  }
  registraMascota(){
    location.href="mascotasr";
    
  }
  cerrarSesion(){
    location.href="#"
  }
}
