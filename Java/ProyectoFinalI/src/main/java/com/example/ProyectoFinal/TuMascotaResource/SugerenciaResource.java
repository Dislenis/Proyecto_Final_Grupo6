package com.example.ProyectoFinal.TuMascotaResource;

import com.example.ProyectoFinal.Service.CorreoService;
import com.example.ProyectoFinal.TuMascota.Sugerencia;
import com.example.ProyectoFinal.TuMascota.Usuario;
import com.example.ProyectoFinal.TuMascotaDAO.SugerenciaDAO;
import com.example.ProyectoFinal.TuMascotaDAO.UsuarioDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/sugerencia")
public class SugerenciaResource {

    @Autowired
    private SugerenciaDAO sugerenciaDao;
    @Autowired
    private CorreoService correoService;

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //GET PARA MOSTAR DATOS DE USUARIOS
    @RequestMapping(method = RequestMethod.GET)
    public List<Sugerencia> obtenersugerencia(@RequestParam String nombre, @RequestParam String apellido) {
        nombre = nombre.replace("%20", "");
        apellido = apellido.replace("%20", ""); //reemplaza
        return SugerenciaDAO.list(nombre, apellido);
    }

    //POST PARA CREAR SUGERENCIA
    @RequestMapping(method = RequestMethod.POST, value = "/addusuario")
    public Sugerencia crearSugerencia(@RequestBody Sugerencia sugerencia) {
        int retorno = sugerenciaDao.crearSugerencia(sugerencia);
        correoService.enviarRespuesta(sugerencia);
        return sugerencia;
    }


    //ELIMINAR SUGERENCIA
    @RequestMapping(method = RequestMethod.DELETE, value = "/eliminarsugerencia/{correo}")
    public int eliminarSugerencia(@PathVariable String correo) {
        int retornar = sugerenciaDao.eliminarSugerencia(correo);
        return retornar;
    }
}
