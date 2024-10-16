import React from "react";
import Slider from "react-slick";
import classes from "./familyLaw.module.css";
import img from "../assets/familyLaw.jpeg"; // Ruta de tu imagen
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FamilyLaw = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  return (
    <div className={classes.root}>
      <p>Derecho de familia</p>
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <img src={img} alt="family law" className={classes.image} />
        </div>
        <div className={classes.sliderContainer}>
          <Slider {...settings}>
            <div className={classes.sliderItem}>
              <h3 className={classes.title}>Alimentos</h3>
              <p className={classes.text}>
                Te ayudamos a gestionar y regular la obligación alimentaria,
                garantizando que tus hijos reciban el sustento necesario para su
                desarrollo. Asesoramos tanto en la fijación como en el aumento,
                actualización o cese de la cuota alimentaria, siempre orientados
                a proteger el interés superior del menor.
              </p>
            </div>
            <div className={classes.sliderItem}>
              <h3 className={classes.title}>
                Régimen de comunicación (visitas)
              </h3>
              <p className={classes.text}>
                Facilitamos acuerdos y trámites judiciales para establecer un
                régimen de comunicación adecuado entre padres e hijos,
                fortaleciendo el vínculo afectivo. Buscamos soluciones
                personalizadas, pensando en el bienestar de los menores y el
                fortalecimiento de relaciones saludables.
              </p>
            </div>
            <div className={classes.sliderItem}>
              <h3 className={classes.title}>Cuidado personal (custodias)</h3>
              <p className={classes.text}>
                Guiamos a padres y cuidadores en la distribución y ejercicio de
                las responsabilidades parentales. Asesoramos sobre acuerdos o
                procesos judiciales que determinen quién asume el cuidado
                principal de los hijos, asegurando decisiones que promuevan su
                estabilidad y bienestar emocional.
              </p>
            </div>
            <div className={classes.sliderItem}>
              <h3 className={classes.title}>Filiación</h3>
              <p className={classes.text}>
                Asesoramos en procesos de reconocimiento, impugnación o
                reclamación de filiación, asegurando el pleno ejercicio de los
                derechos de identidad. Te acompañamos en cada paso para
                garantizar que las decisiones sean tomadas con justicia y
                transparencia.
              </p>
            </div>
            <div className={classes.sliderItem}>
              <h3 className={classes.title}>Violencia Familiar</h3>
              <p className={classes.text}>
                Ofrecemos asesoramiento inmediato en situaciones de violencia
                familiar, gestionando medidas urgentes de protección y
                acompañándote en el proceso judicial. Priorizamos tu seguridad y
                la de tus seres queridos, brindando una atención empática y
                confidencial.
              </p>
            </div>
            <div className={classes.sliderItem}>
              <h3 className={classes.title}>Adopción</h3>
              <p className={classes.text}>
                Te acompañamos en todo el proceso de adopción, desde la
                evaluación inicial hasta la sentencia final, asegurando que cada
                paso se realice conforme a la normativa vigente. Facilitamos el
                camino para que puedas formar o ampliar tu familia de forma
                segura y con respaldo legal.
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FamilyLaw;
