import React from "react";
import classes from "./criminalLaw.module.css";
import whatsappIcon from "../assets/wsp-icon-white.svg";

const CriminalLaw = () => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.textContainer}>
          <h3 className={classes.title}>Derecho Penal</h3>
          <p className={classes.description}>
            Brindamos asesoramiento y defensa integral en todas las etapas del
            proceso penal, garantizando el pleno ejercicio de tus derechos.
            Contar con un defensor de confianza es esencial cuando está en juego
            tu libertad o el resguardo de tu historial penal, por lo que
            ofrecemos un acompañamiento estratégico, profesional y comprometido.
            Nos especializamos en la representación tanto de imputados como de
            víctimas, asegurando una defensa técnica adecuada desde la etapa
            investigativa hasta el juicio oral, con el objetivo de proteger tus
            intereses y garantías legales.
          </p>
        </div>
        <div className={classes.buttonContainer}>
          <a
            href="https://wa.me/+5491133381119"
            target="_blank"
            className={classes.button}
          >
            <img src={whatsappIcon} alt="WhatsApp" className={classes.icon} />
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default CriminalLaw;
