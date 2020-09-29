package com.example.ProyectoFinal.TuMascotaDAO;
import com.example.ProyectoFinal.TuMascota.Usuario;
import com.example.ProyectoFinal.TuMascota.UsuarioMascota;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public class TuMascota2DAO {
    @Autowired
    private static JdbcTemplate jdbcTemplate;

    public TuMascota2DAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    //GET PARA MOSTRAR LISTA DE MASCOTAS
    public List<UsuarioMascota> listaMascota (){
        String SQLconsulta = "SELECT * FROM Mascota";
        List<UsuarioMascota> usuarios = jdbcTemplate.query(SQLconsulta, (rs, rowNum) ->
                new UsuarioMascota(
                        rs.getInt("ID") ,
                        rs.getString("Nombre"),
                        rs.getString("Estatura"),
                        rs.getInt("Edad") ,
                        rs.getString("Sexo") ,
                        rs.getString("Imagen") ,
                        rs.getString("Descripcion") ,
                        rs.getInt("ID_Comunas") ,
                        rs.getString("Region") ,
                        rs.getString("Comuna"),
                        rs.getInt("id_usuario")
                )
        );
        return usuarios;
    }

    //GET PARA MOSTRAR MASCOTA POR ID
    public List<UsuarioMascota> getMascotaID (int id){
        String sqlConsulta = "SELECT ms.ID as ID,Nombre,Estatura,Edad,Sexo,Imagen,Descripcion,ID_Comunas,Region,cm.Comuna as Comuna FROM Mascota ms inner join Comunas cm on ms.id_comunas=cm.id  WHERE ms.id = ?";
        List<UsuarioMascota> usuarios = jdbcTemplate.query(sqlConsulta,new Object[]{id}, (rs, rowNum) ->
                new UsuarioMascota(
                        rs.getInt("ID") ,
                        rs.getString("Nombre"),
                        rs.getString("Estatura"),
                        rs.getInt("Edad") ,
                        rs.getString("Sexo") ,
                        rs.getString("Imagen") ,
                        rs.getString("Descripcion") ,
                        rs.getInt("ID_Comunas") ,
                        rs.getString("Region") ,
                        rs.getString("Comuna"),
                        rs.getInt("id_usuario")
                )
        );
        return usuarios;
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //OBTENER MASCOTAS SEGUN REGION, COMUNA, ESTATURA Y SEXO PARA BUSQUEDA SELECTIVA
    public static List<UsuarioMascota> listaBusqueda( String estatura, String sexo, String region, String comuna) {
        String sqlRegion = "SELECT * FROM Mascota WHERE Estatura = ? and Sexo = ? and Region = ? and Comuna = ?";
        System.out.println(sqlRegion);
        List<UsuarioMascota> busquedaMascota = jdbcTemplate.query(sqlRegion, new Object[]{ estatura, sexo, region, comuna},(rs, rowNum) ->
                new UsuarioMascota(
                        rs.getInt("ID"),
                        rs.getString("Nombre"),
                        rs.getString("Estatura"),
                        rs.getInt("Edad"),
                        rs.getString("Sexo"),
                        rs.getString("Imagen"),
                        rs.getString("Descripcion"),
                        rs.getInt("ID_Comunas"),
                        rs.getString("Region"),
                        rs.getString("Comuna"),
                        rs.getInt("id_usuario")
                )
        );
        return busquedaMascota;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //REGISTRO MASCOTA
    public int crearUsuarioMascota(UsuarioMascota mascota) {
        System.out.println("nombre " + mascota.getNombre());
        System.out.println("estatura " + mascota.getEstatura());
        System.out.println("edad " + mascota.getEdad());
        System.out.println("sexo " + mascota.getSexo());
        System.out.println("descripcion " + mascota.getDescripcion());
        System.out.println("region " + mascota.getRegion());
        System.out.println("comuna " + mascota.getComuna());
        System.out.println("id_Comuna " + mascota.getID_Comunas());
        System.out.println("id_usuario " + mascota.getId_usuario());

        String sqlcrear = "INSERT INTO Mascota (Nombre, Estatura, Edad, Sexo, Imagen, Descripcion, Region, Comuna, ID_Comunas, id_usuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?)";
        int resultado = jdbcTemplate.update(sqlcrear, mascota.getNombre(), mascota.getEstatura(), mascota.getEdad(), mascota.getSexo(), mascota.getImagen(), mascota.getDescripcion(), mascota.getRegion(), mascota.getComuna(), mascota.getID_Comunas(), mascota.getId_usuario());
        return resultado;
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //CONSULTA SI USUARIO MASCOTA EXISTE POR ID
    public int usuarioMascotaExiste(int ID) {
        String sqlconsulta = "SELECT count(*) FROM Mascota where ID = ?";
        int result = jdbcTemplate.queryForObject("SELECT COUNT(*) FROM Mascota where ID = ?",new Object[] { ID }, Integer.class);
        return result;
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //ACTUALIZAR MASCOTA
    public int actualizarUsuarioMascota(UsuarioMascota editar, int ID) {
        String sqleditar = "UPDATE Mascota set Nombre = ?, Estatura=?, Edad=?, Sexo=?, Imagen=?, Descripcion=?, ID_Comunas=? where ID = ? ";
        int resulta = jdbcTemplate.update(sqleditar, editar.getNombre(), editar.getEstatura(), editar.getEdad(), editar.getSexo(), editar.getImagen(), editar.getDescripcion(), editar.getID_Comunas(), ID);
        return resulta;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //ELIMINAR USUARIO MASCOTA
    public int eliminarUsuarioMascota(int ID) {
        String sqleliminar = "DELETE FROM Mascota WHERE ID =?";
        int resulta = jdbcTemplate.update(sqleliminar, ID);
        return resulta;
    }


}
