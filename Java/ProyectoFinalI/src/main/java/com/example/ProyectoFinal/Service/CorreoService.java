package com.example.ProyectoFinal.Service;

import com.example.ProyectoFinal.TuMascota.Adopcion;
import com.example.ProyectoFinal.TuMascota.Sugerencia;
import com.example.ProyectoFinal.TuMascota.Usuario;

public interface CorreoService {

    public void enviarBienvenida(int id_usuario);

    public void enviarBienvenidafromcorreo(Usuario usuario);

    public void recuperarPassword(String correo);

    public void enviarRespuesta(Sugerencia sugerencia);

    public void aceptarSolicitudAdopcion(int id);


}
