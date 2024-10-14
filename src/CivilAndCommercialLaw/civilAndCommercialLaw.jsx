import React from "react";
import classes from "./civilAndCommercialLaw.module.css";
import whatsappIcon from '../assets/wsp-icon-white.svg';

const civilAndCommercialLaw = () => {
  return (
    <div className={classes.root}>
        <div className={classes.container}>
            <div className={classes.textContainer}>
                <h3 className={classes.title}>Derecho Civil y Comercial</h3>
                <p className={classes.description}>
                    En nuestra área de Derecho Civil y Comercial, ofrecemos asesoría legal en diversas situaciones.
                    Desde contratos comerciales hasta litigios civiles, nuestro equipo está preparado para ayudar a nuestros clientes a resolver disputas,
                    garantizar la validez de acuerdos y proteger sus derechos. Nos comprometemos a brindar soluciones efectivas y eficientes,
                    siempre con el objetivo de salvaguardar los intereses de nuestros clientes.
                </p>
            </div>
            <div className={classes.buttonContainer}>
                <a href="https://wa.me/1164870004" target="_blank" className={classes.button}>
                    <img src={whatsappIcon} alt="WhatsApp" className={classes.icon} />
                    Contáctanos por WhatsApp
                </a>
            </div>
         </div>
    </div>
  );
};

export default civilAndCommercialLaw;

