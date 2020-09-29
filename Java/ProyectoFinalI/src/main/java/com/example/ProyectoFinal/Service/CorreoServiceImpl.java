package com.example.ProyectoFinal.Service;


import com.example.ProyectoFinal.TuMascota.Adopcion;
import com.example.ProyectoFinal.TuMascota.Sugerencia;
import com.example.ProyectoFinal.TuMascota.Usuario;

import com.example.ProyectoFinal.TuMascotaDAO.AdopcionDAO;
import com.example.ProyectoFinal.TuMascotaDAO.UsuarioDAO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.List;

@Service
public class CorreoServiceImpl implements CorreoService {

    private static final Logger LOGGER = LoggerFactory.getLogger(CorreoServiceImpl.class);
    private String de;
    private String para;
    private String asunto;
    private String mensaje;

    @Autowired
    private UsuarioDAO usuarioDao;

    @Autowired
    private JavaMailSender sender;

    @Autowired
    private AdopcionDAO adopcionDao;


    @Override
    public void enviarBienvenida(int id_usuario) {


        List<Usuario> usuario = usuarioDao.consultarUsuario(id_usuario);


        // Recipient's email ID needs to be mentioned.
        String to = usuario.get(0).getCorreo();

        // Sender's email ID needs to be mentioned
        String from = "grupo7forge@gmail.com";


        String asunto, mensaje;

        asunto = "Bienvenid@ a Wof";
        mensaje = "Hola " + usuario.get(0).getNombre() + " " + usuario.get(0).getApellido() + ", estamos muy felices de que te hayas sumado a nuestra comunidad. ¡Te invitamos a conocer a nuestras mascotas! http://localhost:4200/ ";

        // Get the Session object.// and pass username and password
      /* // Session session = Session.getInstance(properties, new javax.mail.Authenticator() {

            protected PasswordAuthentication getPasswordAuthentication(){

                return new PasswordAuthentication("grupo7forge@gmail.com", "guicarelidisben");

            }

        });*/

        // Used to debug SMTP issues
        /*   session.setDebug(true);*/

        try {
            // Create a default MimeMessage object.
            MimeMessage message = sender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message);
            helper.setTo(to);
            helper.setText(mensaje, true);
            helper.setSubject(asunto);
            sender.send(message);
            LOGGER.info("envio exitoso");




          /*  // Set From: header field of the header.
            message.setFrom(new InternetAddress(from));

            // Set To: header field of the header.
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));

            // Set Subject: header field
            message.setSubject(asunto);

            // Now set the actual message
            //message.setText(mensaje);
            message.setContent("<h1>Hola "+usuario.get(0).getNombre()+"</h1>" +
                    "<p>Gracias por registrarte en nuestro sitio</p>" +
                    "<p>No dudes en contactarnos si tienes cualquier duda adicional.</p>" +
                    "<br>Saludos,<br>" +
                    "<br>Dislenis" +
                    "<br>Fundación Tu Mascota","text/html" );

            System.out.println("sending...");
            // Send message
            Transport.send(message);
            System.out.println("Sent message successfully....");
            return 1;
        }*/
        } catch (MessagingException mex) {
            LOGGER.error("error de mensaje " + mex.getMessage(), mex);
            mex.printStackTrace();

        }

    }

    @Override
    public void enviarBienvenidafromcorreo(Usuario usuario) {


        // Recipient's email ID needs to be mentioned.
        String to = usuario.getCorreo();

        // Sender's email ID needs to be mentioned
        String from = "grupo7forge@gmail.com";


        String asunto, mensaje;

        asunto = "Bienvenid@ a Wof";
        mensaje = "Hola " + usuario.getNombre() + " " + usuario.getApellido() + ", estamos muy felices de que te hayas sumado a nuestra comunidad. ¡Te invitamos a conocer a nuestras mascotas! http://localhost:4200/";

        ;

        try {
            // Create a default MimeMessage object.
            MimeMessage message = sender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message);
            helper.setTo(to);
            helper.setText(mensaje, true);
            helper.setSubject(asunto);
            sender.send(message);
            LOGGER.info("envio exitoso");


        } catch (MessagingException mex) {
            LOGGER.error("error de mensaje " + mex.getMessage(), mex);
            mex.printStackTrace();

        }
    }

    @Override
    public void recuperarPassword(String correo) {

        // Recipient's email ID needs to be mentioned.
        String to = correo;

        // Sender's email ID needs to be mentioned
        String from = "grupo7forge@gmail.com";


        String asunto, mensaje;

        asunto = "Bienvenid@ a TuMascota";
        mensaje = "Hola usuario " + correo + ", has solicitado reestablecer la contraseña de 'Wof', si no fue usted omita este mensaje y actualice sus datos en nuestra página, o por el contrario, presione el siguiente link : http://localhost:4200/cambiar";

        try {
            // Create a default MimeMessage object.
            MimeMessage message = sender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message);
            helper.setTo(to);
            helper.setText(mensaje, true);
            helper.setSubject(asunto);
            sender.send(message);
            LOGGER.info("envio exitoso");


        } catch (MessagingException mex) {
            LOGGER.error("error de mensaje " + mex.getMessage(), mex);
            mex.printStackTrace();

        }
    }

    @Override
    public void enviarRespuesta(Sugerencia sugerencia) {


        // Recipient's email ID needs to be mentioned.
        String to = sugerencia.getCorreo();

        // Sender's email ID needs to be mentioned
        String from = "grupo7forge@gmail.com";


        String asunto, mensaje;

        asunto = "Bienvenid@ a Wof";
        mensaje = "Hola " + sugerencia.getNombre() + " " + sugerencia.getApellido() + ", hemos recibido su comentario, nuestro equipo muy pronto se pondrá en contacto. ¡Muchas gracias!";


        try {
            // Create a default MimeMessage object.
            MimeMessage message = sender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message);
            helper.setTo(to);
            helper.setText(mensaje, true);
            helper.setSubject(asunto);
            sender.send(message);
            LOGGER.info("envio exitoso");


        } catch (MessagingException mex) {
            LOGGER.error("error de mensaje " + mex.getMessage(), mex);
            mex.printStackTrace();

        }
    }

    @Override
    public void aceptarSolicitudAdopcion(int id) {

        int id_Usuario = adopcionDao.buscarAdopcion(id);
        List<Usuario> usuario = usuarioDao.consultarUsuario(id_Usuario);


        // Recipient's email ID needs to be mentioned.
        String to = usuario.get(0).getCorreo();

        // Sender's email ID needs to be mentioned
        String from = "grupo7forge@gmail.com";


        String asunto, mensaje;

        asunto = "Bienvenid@ a Wof";
        mensaje = "Hola " + usuario.get(0).getNombre() + " " + usuario.get(0).getApellido() + ", su solicitud de adopcion ha sido aceptada, pronto te contactarán. ¡Felicidades! ";



        try {
            // Create a default MimeMessage object.
            MimeMessage message = sender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message);
            helper.setTo(to);
            helper.setText(mensaje, true);
            helper.setSubject(asunto);
            sender.send(message);
            LOGGER.info("envio exitoso");




        } catch (MessagingException mex) {
            LOGGER.error("error de mensaje " + mex.getMessage(), mex);
            mex.printStackTrace();

        }

    }


}

