package com.example.ProyectoFinal.TuMascotaDAO;
import com.example.ProyectoFinal.TuMascota.Sugerencia;
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
    public static List<Sugerencia> list() {
        String sqlConsulta = "SELECT * FROM Sugerencia";
        List<Sugerencia> sugerencias = jdbcTemplate.query(sqlConsulta, BeanPropertyRowMapper.newInstance(Sugerencia.class));
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
