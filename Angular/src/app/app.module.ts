import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistroComponent } from './registro/registro.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { TablaComponent } from './tabla/tabla.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { AccesoComponent } from './acceso/acceso.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from'@angular/common/http';
import { UsuarioService } from './servicios/usuario.service';
import { MascotasRComponent } from './mascotas-r/mascotas-r.component';
import { MisDatosComponent } from './mis-datos/mis-datos.component';
import { AdopcionComponent } from './adopcion/adopcion.component';
import { EditarComponent } from './editar/editar.component';
import { CambiarComponent } from './cambiar/cambiar.component';
import { SugerenciaComponent } from './sugerencia/sugerencia.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { TablamascotasComponent } from './tablamascotas/tablamascotas.component';
import { TablaadopcionesComponent } from './tablaadopciones/tablaadopciones.component';
import { TablasugerenciaComponent } from './tablasugerencia/tablasugerencia.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FilterPipe } from './pipes/filter.pipe';
import {MatInputModule} from '@angular/material/input';





@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    PaginaInicioComponent,
    TablaComponent,
    AccesoComponent,
    NosotrosComponent,
    MascotasRComponent,
    MisDatosComponent,
    MascotasComponent,
    AdopcionComponent,
    EditarComponent,
    CambiarComponent,
    SugerenciaComponent,
    EditarPerfilComponent,
    SolicitudesComponent,
    TablamascotasComponent,
    TablaadopcionesComponent,
    TablasugerenciaComponent,
    FilterPipe,

   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    MatInputModule
   
 
    


  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
