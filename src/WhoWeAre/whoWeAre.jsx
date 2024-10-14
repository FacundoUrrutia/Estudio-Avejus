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
                    Forjamos relaciones sólidas con nuestros clientes a través de un
                    equipo de abogados especializados en diversas áreas del derecho,
                    brindando asesoramiento integral para asegurar su satisfacción.
                </p>
                <button 
                    className={classes.contactButton} 
                    onClick={() => handleLinkClick(isMobile ? 3300 : 2800)}
                >
                    Contactarnos
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

