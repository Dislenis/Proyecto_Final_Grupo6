package com.example.ProyectoFinal.TuMascota;

import java.util.Date;

public class Adopcion {

    private int ID;
    private int ID_Mascota;
    private int ID_Usuario;
    private String Estado;
    private String nombreMascota;
    private String estatura;
    private int edad;
    private String sexo;
    private String nombreUsuario;
    private String Apellido;
    private String correo;



    public Adopcion() {
    }

    public Adopcion(int ID, int ID_Mascota, int ID_Usuario, String Estado, String nombreMascota, String estatura, int edad, String sexo, String nombreUsuario, String apellido, String correo) {

        this.ID = ID;
        this.ID_Mascota = ID_Mascota;
        this.ID_Usuario = ID_Usuario;
        this.Estado = Estado;
        this.nombreMascota = nombreMascota;
        this.estatura = estatura;
        this.edad = edad;
        this.sexo = sexo;
        this.nombreUsuario = nombreUsuario;
        this.Apellido = apellido;
        this.correo = correo;



    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public int getID_Mascota() {
        return ID_Mascota;
    }

    public void setID_Mascota(int ID_Mascota) {
        this.ID_Mascota = ID_Mascota;
    }

    public int getID_Usuario() {
        return ID_Usuario;
    }

    public void setID_Usuario(int ID_Usuario) {
        this.ID_Usuario = ID_Usuario;
    }

    public String getEstado() {
        return Estado;
    }

    public void setEstado(String estado) {
        Estado = estado;
    }

    public String getNombreMascota() {
        return nombreMascota;
    }

    public void setNombreMascota(String nombreMascota) {
        this.nombreMascota = nombreMascota;
    }

    public String getEstatura() {
        return estatura;
    }

    public void setEstatura(String estatura) {
        this.estatura = estatura;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public String getApellido() {
        return Apellido;
    }

    public void setApellido(String apellido) {
        Apellido = apellido;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }


    @Override
    public String toString() {
        return "Adopcion{" +
                "ID=" + ID +
                ", ID_Mascota=" + ID_Mascota +
                ", ID_Usuario=" + ID_Usuario +
                ", Estado='" + Estado + '\'' +
                ", nombreMascota='" + nombreMascota + '\'' +
                ", estatura='" + estatura + '\'' +
                ", edad=" + edad +
                ", sexo='" + sexo + '\'' +
                ", nombreUsuario='" + nombreUsuario + '\'' +
                ", Apellido='" + Apellido + '\'' +
                ", correo='" + correo + '\'' +
                '}';
    }
}

