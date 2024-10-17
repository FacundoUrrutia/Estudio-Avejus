import React from "react";
import classes from "./whoWeAre.module.css";
import img from '../assets/quienesSomos.jpeg';

const WhoWeAre = ({ handleLinkClick , isMobile}) => {
  return (
    <div className={classes.root}>
        <div className={classes.contentContainer}>
            <div className={classes.textContainer}>
                <h3>QUIÉNES SOMOS</h3>
                <p>
                Forjamos relaciones sólidas con nuestros clientes mediante un acompañamiento personalizado en cada etapa del proceso,
                 respaldado por un equipo de abogados especializados en diversas áreas del derecho.
                  Nuestra prioridad es brindar confianza y seguridad a través de un trato cercano y exclusivo,
                   ofreciendo un asesoramiento integral orientado a alcanzar la solución más favorable para cada asunto jurídico.
                </p>
                <button 
                    className={classes.contactButton} 
                    onClick={() => handleLinkClick(isMobile ? 4650 : 3100)}
                >
                    Contactanos
                </button>
            </div>
            <div className={classes.imageContainer}>
                <img src={img} alt="quienes somos" />
            </div>
        </div>
    </div>
  );
};

export default WhoWeAre;

