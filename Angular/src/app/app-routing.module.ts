import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { AccesoComponent } from './acceso/acceso.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { TablaComponent } from './tabla/tabla.component';
import { AppComponent } from './app.component';
import { MascotasRComponent } from './mascotas-r/mascotas-r.component';
import { MisDatosComponent } from './mis-datos/mis-datos.component';
import { EditarComponent } from './editar/editar.component';
import { CambiarComponent } from './cambiar/cambiar.component';
import { SugerenciaComponent } from './sugerencia/sugerencia.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { SolicitudesComponent} from './solicitudes/solicitudes.component';
import { TablasugerenciaComponent } from './tablasugerencia/tablasugerencia.component';
import { TablamascotasComponent } from './tablamascotas/tablamascotas.component';
import { TablaadopcionesComponent } from './tablaadopciones/tablaadopciones.component';



const routes: Routes = [
 
  {path:"", component:PaginaInicioComponent},
  {path:"registro", component:RegistroComponent},
  {path:"mascotas", component:MascotasComponent},
  {path:"acceso", component:AccesoComponent},
  {path:"nosotros", component:NosotrosComponent},
  {path:'table', component: TablaComponent},
  {path:'mascotasr', component: MascotasRComponent},
  {path:'misDatos', component: MisDatosComponent},
  {path:'editar', component: EditarComponent},
  {path:'cambiar', component: CambiarComponent},
  {path:'sugerencia', component: SugerenciaComponent},
  {path:'editarPerfil', component:EditarPerfilComponent},
  {path:'solicitudes', component:SolicitudesComponent},
  {path:'tablasugerencia',component:TablasugerenciaComponent},
  {path:'tablamascotas', component:TablamascotasComponent},
  {path:'tablaadopciones', component:TablaadopcionesComponent}
 

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
