import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import classes from "./contactUs.module.css";
import iconCall from "../assets/MonoIconsCall.svg";
import iconEmail from "../assets/MonoIconsEmail.svg";
import iconHome from "../assets/MonoIconsHome.svg";

const ContactUs = () => {
  const [emailSucces, setEmailSucces] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [genericError, setGenericError] = useState("");
  const [nombreError, setNombreError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [telefonoError, setTelefonoError] = useState("");

  const form = useRef();

  const genericErrorText = "Por favor, completa todos los campos.";

  // Función para validar el nombre
  const validateNombre = (value) => /^[A-Za-z\s]+$/.test(value);

  // Función para validar el email
  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  // Función para validar el teléfono
  const validateTelefono = (value) => /^\d+$/.test(value);

  const sendEmail = (e) => {
    e.preventDefault();
    setGenericError("");
    setNombreError("");
    setEmailError("");
    setTelefonoError("");

    // Validar nombre
    if (!validateNombre(nombre)) {
      setNombreError("El nombre solo debe contener letras.");
      return;
    }

    // Validar email
    if (!validateEmail(correo)) {
      setEmailError("Ingresa un correo electrónico válido.");
      return;
    }

    // Validar teléfono
    if (!validateTelefono(telefono)) {
      setTelefonoError("El teléfono solo debe contener números.");
      return;
    }

    if (!nombre || !correo || !telefono || !mensaje) {
      setGenericError(genericErrorText);
      return;
    }

    setIsSending(true); // Cambiar el estado a "enviando"

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
          setIsSending(false);
          setNombre(""); // Limpiar inputs
          setCorreo("");
          setTelefono("");
          setMensaje("");
        },
        (error) => {
          console.error("Error al enviar el email:", error.text);
          setGenericError(
            "Hubo un problema al enviar el mensaje. Intenta de nuevo más tarde."
          );
          setIsSending(false); // Restablecer el estado si ocurre un error
        }
      );
  };

  return (
    <div className={classes.root}>
      <form ref={form} onSubmit={sendEmail} className={classes.form}>
        <div className={classes.infoContainer}>
          <h3 className={classes.title}>CONTACTO</h3>
          <div className={classes.info}>
            <div className={classes.imgAndText}>
              <img src={iconCall} width={20} alt="icon phone" />
              <p>1133381119</p>
            </div>
            <div className={classes.imgAndText}>
              <img src={iconEmail} width={20} alt="icon mail" />
              <p>estudio.avejus@hotmail.com</p>
            </div>
            <div className={classes.imgAndText}>
              <img src={iconHome} width={20} alt="icon home" />
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
          onChange={(e) => setNombre(e.target.value)}
        />
        {nombreError && <p className={classes.error}>{nombreError}</p>}
        <input
          name="user_email"
          type="email"
          placeholder="Email"
          className={classes.input}
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        {emailError && <p className={classes.error}>{emailError}</p>}
        <input
          name="user_telephone"
          type="text"
          placeholder="Teléfono"
          className={classes.input}
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        {telefonoError && <p className={classes.error}>{telefonoError}</p>}
        <textarea
          name="message"
          placeholder="Mensaje"
          className={classes.inputArea}
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        {genericError && <p className={classes.error}>{genericError}</p>}

        {/* Mostrar el botón dependiendo del estado de envío */}
        {!emailSucces && (
          <button
            type="submit"
            className={classes.submitButton}
            disabled={isSending} // Deshabilitar mientras se envía
          >
            {isSending ? "Enviando..." : "Enviar Mensaje"}
          </button>
        )}

        {/* Mensaje de éxito después del envío */}
        {emailSucces && (
          <p
            className={`${classes.emailSuccesText} ${
              emailSucces ? classes.emailSuccesTextShow : ""
            }`}
          >
            ¡Gracias por tu mensaje!
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactUs;
