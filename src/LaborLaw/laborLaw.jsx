import React from "react";
import classes from "./laborLaw.module.css";

const LaborLaw = ({ handleLinkClick, isMobile }) => {
  return (
    <div className={classes.root}>
        <p>Derecho laboral</p>
        <div className={classes.cardContainer}>
            <div className={classes.card}>
                <h3 className={classes.cardTitle}>Accidentes de trabajo (ART)</h3>
                <div className={classes.cardContent}>
                    <p className={classes.cardText}>
                        Brindamos asesoría integral en casos de accidentes laborales, asegurando que se cumplan los derechos de los trabajadores y gestionando indemnizaciones.
                    </p>
                    <button 
                        className={classes.contactButton}
                        onClick={() => handleLinkClick(isMobile ? 3700 : 2800)}
                    >
                        Contáctanos
                    </button>
                </div>
            </div>
            <div className={classes.card}>
                <h3 className={classes.cardTitle}>Despidos injustificados</h3>
                <div className={classes.cardContent}>
                    <p className={classes.cardText}>
                        Te ayudamos a enfrentar despidos injustificados, buscando las compensaciones y derechos que te corresponden de acuerdo a la legislación laboral.
                    </p>
                    <button 
                        className={classes.contactButton}
                        onClick={() => handleLinkClick(isMobile ? 3700 : 2800)}
                    >
                        Contáctanos
                    </button>
                </div>
            </div>
            <div className={classes.card}>
                <h3 className={classes.cardTitle}>Trabajos no registrados (en negro)</h3>
                <div className={classes.cardContent}>
                    <p className={classes.cardText}>
                        Asesoramos sobre derechos laborales para trabajadores no registrados, garantizando la protección y cumplimiento de las normativas de seguridad.
                    </p>
                    <button 
                        className={classes.contactButton}
                        onClick={() => handleLinkClick(isMobile ? 3700 : 2800)}
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
