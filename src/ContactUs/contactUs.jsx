import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import classes from "./contactUs.module.css";
import iconCall from '../assets/MonoIconsCall.svg';
import iconEmail from '../assets/MonoIconsEmail.svg';
import iconHome from '../assets/MonoIconsHome.svg';

const ContactUs = () => {
  const [emailSucces, setEmailSucces] = useState(false);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [genericError, setGenericError] = useState("");

  const form = useRef();

  const genericErrorText = "Por favor, completa todos los campos.";

  const sendEmail = (e) => {
    e.preventDefault();
    setGenericError("");

    // Validaciones
    if (!nombre || !correo || !telefono || !mensaje) {
      setGenericError(genericErrorText);
      return;
    }

    // Envío de email
    emailjs
      .sendForm(
        "service_hzld75v",
        "template_alciwfc",
        form.current,
        "8J4PtsM1Qrrct0d6A"
      )
      .then(
        (result) => {
          console.log("Email enviado con éxito:", result.text);
          setEmailSucces(true);
        },
        (error) => {
          console.error("Error al enviar el email:", error.text);
          setGenericError("Hubo un problema al enviar el mensaje. Intenta de nuevo más tarde.");
        }
      );
  };

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleCorreoChange = (e) => {
    setCorreo(e.target.value);
  };

  const handleTelefonoChange = (e) => {
    setTelefono(e.target.value);
  };

  const handleMensajeChange = (e) => {
    setMensaje(e.target.value);
  };

  return (
    <div className={classes.root}>
          <form ref={form} onSubmit={sendEmail} className={classes.form}>
               <div className={classes.infoContainer}>
                    <h3 className={classes.title}>CONTACTO</h3>
                    <div className={classes.info}>
                         <div className={classes.imgAndText}>
                              <img src={iconCall} width={20} alt="icon phone"/>
                              <p>1164870004</p>
                         </div>
                         <div className={classes.imgAndText}>
                              <img src={iconEmail} width={20} alt="icon mail"/>
                              <p>estudio.avejus@hotmail.com</p>
                         </div>
                         <div className={classes.imgAndText}>
                              <img src={iconHome} width={20} alt="icon home"/>
                              <p>Buenos Aires capital/provincia</p>
                         </div>
                    </div>
               </div>
          <input
               name="user_name"
               type="text"
               placeholder="Nombre"
               className={classes.input}
               value={nombre}
               onChange={handleNombreChange}
          />
          <input
               name="user_email"
               type="email"
               placeholder="Email"
               className={classes.input}
               value={correo}
               onChange={handleCorreoChange}
          />
          <input
               name="user_telephone"
               type="text"
               placeholder="Teléfono"
               className={classes.input}
               value={telefono}
               onChange={handleTelefonoChange}
          />
          <textarea
               name="message"
               placeholder="Mensaje"
               className={classes.inputArea}
               value={mensaje}
               onChange={handleMensajeChange}
          />
          {genericError && <p className={classes.error}>{genericError}</p>}
          <button
               type="submit"
               className={emailSucces ? classes.hideButton : classes.submitButton}
          >
               {emailSucces ? "Enviando..." : "Enviar Mensaje"}
          </button>
          {emailSucces && (
               <p className={classes.emailSuccesText}>
               ¡Gracias por tu mensaje!
               </p>
          )}
          </form>
    </div>
  );
};

export default ContactUs;
