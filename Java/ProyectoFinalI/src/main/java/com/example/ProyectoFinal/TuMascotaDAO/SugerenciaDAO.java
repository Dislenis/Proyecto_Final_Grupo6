package com.example.ProyectoFinal.TuMascotaDAO;
import com.example.ProyectoFinal.TuMascota.Sugerencia;
import com.example.ProyectoFinal.TuMascota.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public class SugerenciaDAO {

    @Autowired
    private static JdbcTemplate jdbcTemplate;

    public SugerenciaDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    //MOSTRAR LISTA COMPLETA SUGERENCIAS
    public static List<Sugerencia> list(String nombre, String apellido) {
        String sqlConsulta = "select s.nombre, s.apellido, s.correo, s.telefono, s.descripcion from sugerencia s\n" +
                "                                where ((?='')or (upper (s.nombre) like upper (?))) and \n" +
                "                                ((?='')or (upper (s.apellido) like upper (?)))";
        List<Sugerencia> sugerencias = jdbcTemplate.query(sqlConsulta, new Object[] {nombre, '%' + nombre + '%', apellido, '%' + apellido + '%'},(rs, rowNum) ->
        new Sugerencia(
                rs.getString("nombre"),
                rs.getString("apellido"),
                rs.getString("correo"),
                rs.getString("telefono"),
                rs.getString("descripcion")
        ));
        return sugerencias;
    }

    //REGISTRO SUGERENCIA
    public int crearSugerencia(Sugerencia sugerencia) {
        String sqlcrear = "INSERT INTO Sugerencia ( nombre, apellido, correo, telefono, descripcion) VALUES (?, ?, ?, ?,?)";
        int resultado = jdbcTemplate.update(sqlcrear, sugerencia.getNombre(), sugerencia.getApellido(), sugerencia.getCorreo(),sugerencia.getTelefono(), sugerencia.getDescripcion());
        return resultado;
    }

    //ELIMINAR SUGERENCIA
    public int eliminarSugerencia(String correo) {
        String sqleliminar = "DELETE FROM Sugerencia WHERE correo =?";
        int resulta = jdbcTemplate.update(sqleliminar, correo);
        return resulta;
    }
}
