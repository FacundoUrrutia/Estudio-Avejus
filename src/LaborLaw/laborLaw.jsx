import React from "react";
import classes from "./laborLaw.module.css";

const LaborLaw = ({ handleLinkClick, isMobile }) => {
  return (
    <div className={classes.root}>
        <p>Derecho laboral</p>
        <div className={classes.cardContainer}>
            <div className={classes.card}>
                <h3 className={classes.cardTitle}>Contrato laboral</h3>
                <div className={classes.cardContent}>
                    <p className={classes.cardText}>
                        Nos especializamos en la revisión y redacción de contratos de trabajo, garantizando que cumplan con las normativas vigentes.
                    </p>
                    <button 
                        className={classes.contactButton}
                        onClick={() => handleLinkClick(isMobile ? 3500 : 2800)}
                    >
                    Contáctanos
                    </button>
                </div>
            </div>
            <div className={classes.card}>
                <h3 className={classes.cardTitle}>Despidos y compensaciones</h3>
                <div className={classes.cardContent}>
                    <p className={classes.cardText}>
                        Te asistimos en casos de despidos injustificados, ayudándote a obtener las compensaciones que mereces según la ley.
                    </p>
                    <button 
                        className={classes.contactButton}
                        onClick={() => handleLinkClick(isMobile ? 3500 : 2800)}
                    >
                        Contáctanos
                    </button>
                </div>
            </div>
            <div className={classes.card}>
                <h3 className={classes.cardTitle}>Seguridad en el trabajo</h3>
                <div className={classes.cardContent}>
                    <p className={classes.cardText}>
                        Ofrecemos asesoramiento sobre la normativa de seguridad y salud laboral, protegiendo a empleados y empleadores.
                    </p>
                    <button 
                        className={classes.contactButton}
                        onClick={() => handleLinkClick(isMobile ? 3500 : 2800)}
                    >
                        Contáctanos
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default LaborLaw;
