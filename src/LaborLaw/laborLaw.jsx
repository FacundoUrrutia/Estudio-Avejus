import React from "react";
import Slider from "react-slick";
import classes from "./laborLaw.module.css";
import img1 from "../assets/laborLaw3.jpeg";
import img2 from "../assets/laborLaw2.jpeg";
import iconButton from "../assets/mailWhite.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LaborLaw = ({ handleLinkClick, isMobile }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const sliderSettingsImages = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const items = [
    {
      title: "Accidentes de trabajo (ART)",
      text: "Te asistimos en la tramitación de indemnizaciones por accidentes laborales y enfermedades profesionales, asegurando que la Aseguradora de Riesgos del Trabajo (ART) cumpla con sus obligaciones. Nos encargamos de gestionar tanto los reclamos administrativos como las acciones legales necesarias para que recibas la compensación justa.",
    },
    {
      title: "Despidos injustificados",
      text: "Si has sido despedido sin una causa válida, te ayudamos a reclamar la indemnización que por ley corresponde. Evaluamos tu caso en detalle, identificando las mejores estrategias para obtener una compensación adecuada y proteger tus derechos laborales.",
    },
    {
      title: "Trabajos no registrados (en negro)",
      text: "Defendemos tus derechos frente a situaciones de empleo no registrado o en condiciones irregulares. Te asesoramos para reclamar aportes no realizados, indemnizaciones y el reconocimiento pleno de tu antigüedad laboral, asegurando la regularización de tu situación.",
    },
  ];

  return (
    <div className={classes.root}>
      <p className={classes.title}>Derecho Laboral</p>
      <div className={classes.contentWrapper}>
        <div className={classes.sliderContainer}>
          <Slider {...sliderSettings} className={classes.slider}>
            {items.map((item, index) => (
              <div className={classes.card} key={index}>
                <h3 className={classes.cardTitle}>{item.title}</h3>
                <p className={classes.cardText}>{item.text}</p>
              </div>
            ))}
          </Slider>
          <div className={classes.contactButtonContainer}>
            <button
              className={classes.contactButton}
              onClick={() => handleLinkClick(isMobile ? 3700 : 3100)}
            >
              Contáctanos
              <img src={iconButton} alt="icon button" width={20} />
            </button>
          </div>
        </div>
        <div className={classes.cardContainerMobile}>
          {items.map((item, index) => (
            <div className={classes.card} key={index}>
              <h3 className={classes.cardTitle}>{item.title}</h3>
              <p className={classes.cardText}>{item.text}</p>
            </div>
          ))}
        </div>
        <div className={classes.sliderContainerImages}>
          <Slider {...sliderSettingsImages}>
            {[img1, img2].map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`imagen laboral ${index + 1}`}
                  className={classes.image}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default LaborLaw;
