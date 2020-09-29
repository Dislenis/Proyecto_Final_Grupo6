import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse,HttpParams } from'@angular/common/http';
import { Usuario } from 'src/app/User/usuario'
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Mascota } from '../User/mascota';
import { Region } from '../User/region';
import { Adopcion } from '../User/adopcion';
import { Comuna } from '../User/comuna';
import { adopcionVista} from '../User/adopcionVista';
import { Sugerencia } from '../User/sugerencia';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  httpOptions = {headers : new HttpHeaders({'Content-Type': 'application/json'})};

  //USUARIO
  private usuarioURL: string = 'http://localhost:8080/usuario'; //mostrar la tabla USUARIO
  private crearUsuarioURL: string = '/addusuario';//crear USUARIO
  private existeUsuarioURL : string= '/consultaUsuario/'; //consultar si existe USUARIO
  private editarUsuarioURL : string= '/editarcontraseña/'; //editar USUARIO
  private eliminarUsuarioURL :string = '/eliminarusuario/'; //eliminar USUARIO
  private consultaUsuarioURL :string = '/consulta/';
  private editarURL: string = '/editarusuario';
  private consultaId: string = '/consultaId/';
  
  

  //MASCOTA
  private mascotaURL: string = 'http://localhost:8080/mascota'; //mostrar tabla MASCOTA
  private crearMascotaURL: string = '/guardar'; // crear MASCOTA
  private existeMascotaURL = '/consultaMascota/'; //consultar si existe MASCOTA
  private editarMascotaURL = '/editarmascota/'; //editar MASCOTA
  private eliminarMascotaURL = '/eliminarmascota/';
  private consultaMascotaURL :string = '/mascotaregion';
  private consultaMascotaIDURL :string = '/mascotaID/';

  //GEOLOCALIZACION
  private geolocalizacionURL: string = 'http://localhost:8080/geolocalizacion'; //MOSTRAR REGION
  private comuna = '/comuna'; //MOSTRAR COMUNA
  private provincia = '/provincia'; //MOSTRAR PROVINCIA
  private comuna2 = '/R_C?Region_ID';
  
  //ADOPCION
  private adopcionURL: string = 'http://localhost:8080/adopcion'; //mostar ADOPCION
  private crearAdopcionURL: string = '/crearAdopcion';
  private eliminarAdopcionURL = '/eliminarAdopcion/';
  private listarAdopcionURL = '/solicitudes/';
  private aceptarSolicitudURL = '/aceptarSolicitudAdopcion/';

  //SUGERENCIA
  private sugerenciaURL: string = 'http://localhost:8080/sugerencia';
  private crearSugerenciaURL : string = '/addusuario';
  private eliminarURL : string = '/eliminarsugerencia';
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
//USUARIO
  getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.usuarioURL) //mostrar la tabla USUARIO
  }

  crearUsuario(usuario: Usuario){
    return this.http.post<Usuario>(`${this.usuarioURL+this.crearUsuarioURL}`,usuario, this.httpOptions) //crear USUARIO
  }

  getExisteUsuario(correo:string, password:string) : Observable<Usuario>{
  return this.http.post<Usuario>(`${this.usuarioURL + this.existeUsuarioURL}/${correo}`, password, this.httpOptions)
  }

  getConsulta(correo:string) : Observable<boolean>{
    return this.http.get<boolean>(`${this.usuarioURL + this.consultaUsuarioURL}/${correo}`)
    }

  getConsultaId(ID: number) :Observable<Usuario>{
    return this.http.get<Usuario>(`${this.usuarioURL + this.consultaId}/${ID}`, this.httpOptions)
  }
 
  putUsuario(correo:string, usuario:Usuario): Observable<boolean>{
    return this.http.put<boolean>(`${this.usuarioURL+this.editarUsuarioURL}/${correo}`, usuario, this.httpOptions) //actulizar USUARIO
  }

  putUsuario2(correo:string, usuario:Usuario): Observable<boolean>{
    return this.http.put<boolean>(`${this.usuarioURL+this.editarURL}/${correo}`, usuario, this.httpOptions) //actulizar USUARIO
  }

  deleteUsuario(correo:string): Observable<Usuario[]>{
    return this.http.delete<Usuario[]>(this.usuarioURL + this.eliminarUsuarioURL + correo) //elimiar Usuario
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //MASCOTA
  getMascota(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(this.mascotaURL) //mostrar tabla MASCOTA
  }

  //MASCOTA POR ID
    getMascotaID(id:string): Observable<Mascota[]> {
      return this.http.get<Mascota[]>(this.mascotaURL + this.consultaMascotaIDURL + id) //mostrar tabla MASCOTA
    }

  postMascota(mascota: FormData): Observable<any>{
    return this.http.post<Mascota>(`${this.mascotaURL+this.crearMascotaURL}`,mascota)//crear MASCOTA
  }

   //AQUÍ IRA PARA HACER LA BUSQUEDA DE MASCOTA POR CATEGORIA

   getconsultaMascota(estatura:string,sexo:string, region:any, comuna:string): Observable<Mascota[]>{
    const url = this.mascotaURL+this.consultaMascotaURL;
    const params = new HttpParams()
    .set("estatura", estatura)
    .set("sexo", sexo)
    .set("region", region)
    .set("comuna", comuna);
    return this.http.get<Mascota[]>(url,{params:params} )
  }

  getExisteMascota(id:Number):Observable<any>{
    return this.http.get<Mascota[]>(this.mascotaURL + this.existeMascotaURL + id) //consultar si existe MASCOTA
  }

  putMascota(id:Number, mascota:Mascota): Observable<Number>{ //seria number?
    return this.http.put<Number>(`${this.mascotaURL+this.editarMascotaURL}` + id,mascota, this.httpOptions) //actualizar MASCOTA
  }

  deleteMascota(id:Number): Observable<Mascota[]>{
    return this.http.delete<Mascota[]>(this.mascotaURL+this.eliminarMascotaURL + id) //eliminar MASCOTA
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //GEOLOCALIZACION
  getRegion(): Observable<Region[]>{
    return this.http.get<Region[]>(this.geolocalizacionURL) //consultar si existe REGION
  }

  getComuna(): Observable<Comuna[]>{
    return this.http.get<Comuna[]>(this.geolocalizacionURL + this.comuna) //consultar si existe COMUNA
  }

  getlistaregioncomuna(Region_ID: number){ 
    console.log(Region_ID);
    return this.http.get<Comuna[]>(`${this.geolocalizacionURL+this.comuna2}=${Region_ID}`, this.httpOptions) }

  getProvincia(): Observable<any>{
    return this.http.get<any>(this.geolocalizacionURL + this.provincia) //consultar si existe PROVINCIA
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //ADOPCION
  getAdopcion(): Observable<any>{
    return this.http.get<any>(this.adopcionURL) // lista ADOPCION
  }

  postAdopcion(adopcion: Adopcion): Observable<Adopcion>{
    return this.http.post<Adopcion>(`${this.adopcionURL+this.crearAdopcionURL}`,adopcion, this.httpOptions)//crear ADOPCION
  }

  deleteAdopcion(id:Number): Observable<Adopcion[]>{
    return this.http.delete<Adopcion[]>(this.adopcionURL + this.eliminarAdopcionURL + id) //eliminar Adopcion
  }


  public getSolicitudAdopcion(id: string): Observable<adopcionVista[]> {
    const url =  this.adopcionURL +  this.listarAdopcionURL + id ;
    return this.http.get<adopcionVista[]>(url)
  }

  aceptarSolicitudAdopcion(id: string): Observable<number>{
    return this.http.put<number>(`${this.adopcionURL+this.aceptarSolicitudURL}` + id, this.httpOptions) //actualizar MASCOTA
  }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //SUGERENCIA

  getSugerencia(): Observable<Sugerencia[]> {
    return this.http.get<Sugerencia[]>(this.sugerenciaURL) //mostrar la tabla Sugerencias
  }

  crearSugerencia(sugerencia: Sugerencia){
    return this.http.post<Sugerencia>(`${this.sugerenciaURL+this.crearSugerenciaURL}`,sugerencia, this.httpOptions) //crear USUARIO
  }

  deleteSugerencia(correo:string): Observable<Sugerencia[]>{
    return this.http.delete<Sugerencia[]>(`${this.sugerenciaURL + this.eliminarURL}/${correo}`) //elimiar sugerencia
  }
}
