import React from "react";
import classes from "./criminalLaw.module.css";
import whatsappIcon from '../assets/wsp-icon-white.svg';

const CriminalLaw = () => {
  return (
    <div className={classes.root}>
        <div className={classes.container}>
            <div className={classes.textContainer}>
                <h3 className={classes.title}>Derecho Penal</h3>
                <p className={classes.description}>
                Ofrecemos asesoría legal en derecho penal, defendiendo los derechos de nuestros clientes en casos que involucran delitos.
                Nuestro equipo de abogados especializados en derecho penal está preparado para afrontar situaciones como delitos contra las personas,
                la propiedad y el orden público, siempre buscando una defensa sólida y una resolución justa. Nos comprometemos a brindar un servicio de defensa eficiente y personalizado.
                </p>
            </div>
            <div className={classes.buttonContainer}>
                <a href="https://wa.me/1133381119" target="_blank" className={classes.button}>
                    <img src={whatsappIcon} alt="WhatsApp" className={classes.icon} />
                    Contáctanos por WhatsApp
                </a>
            </div>
         </div>
    </div>
  );
};

export default CriminalLaw;