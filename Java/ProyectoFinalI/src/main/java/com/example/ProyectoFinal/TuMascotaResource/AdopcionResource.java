package com.example.ProyectoFinal.TuMascotaResource;
import com.example.ProyectoFinal.Service.CorreoService;
import com.example.ProyectoFinal.TuMascota.Adopcion;
import com.example.ProyectoFinal.TuMascotaDAO.AdopcionDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController

@RequestMapping("/adopcion")
public class AdopcionResource {

    @Autowired
    private AdopcionDAO adopcionDao;
    @Autowired
    private CorreoService correoService;

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    @RequestMapping(method = RequestMethod.GET)
    public List<Adopcion> listaAdopcion() {
        return AdopcionDAO.listaAdopcion();
    }
    //GET PARA MOSTRAR LISTA DE ADOPCIONES
    @RequestMapping(method = RequestMethod.GET, value = "/lista")
    public List<Adopcion> listaAdopcion(@RequestParam String nombreMascota, @RequestParam String nombreUsuario, @RequestParam String estado) {
        nombreMascota = nombreMascota.replace("%20", "");
        nombreUsuario = nombreUsuario.replace("%20", ""); //reemplaza
        estado = estado.replace("%20", "");
        return AdopcionDAO.listaAdopcion2(nombreMascota, nombreUsuario, estado);
    }
   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   //POST PARA CREAR ADOPCION
   @RequestMapping(method = RequestMethod.POST, value = "/crearAdopcion")
   public Adopcion crearAdopcion(@RequestBody Adopcion adopcion){
       int retornoo = adopcionDao.crearAdopcion(adopcion);
       return adopcion;
   }
   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////77
    //DELETE PARA ELIMINAR ADOPCION
   //ELIMINAR MASCOTA
   @RequestMapping(method = RequestMethod.DELETE, value = "/eliminarAdopcion/{id}")
   public int eliminarUsuarioMascota(@PathVariable int id){
       int retornar = adopcionDao.eliminarAdopcion(id);
       return retornar;
   }

  /*  @RequestMapping(method = RequestMethod.GET, value="/info/{ID_Usuario}")
    public List<Adopcion> obtenerAdopcion(@PathVariable int ID_Usuario) {
        System.out.println(ID_Usuario);
        return AdopcionDAO.listaAdopciones(ID_Usuario);
    }*/

    @RequestMapping( method = RequestMethod.GET, value="/solicitudes/{id}")
    public List<Adopcion> listarSolicitudAdopcion(@PathVariable int id){

        return adopcionDao.listarSolicitudAdopcion(id);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/aceptarSolicitudAdopcion/{id}")
    public int aceptarSolicitudAdopcion(@PathVariable int id){
        System.out.println(id);


        int retor = adopcionDao.aceptarSolicitudAdopcion(id);
        if(retor > 0){
            correoService.aceptarSolicitudAdopcion(id);
        }
        return retor;

    }

}