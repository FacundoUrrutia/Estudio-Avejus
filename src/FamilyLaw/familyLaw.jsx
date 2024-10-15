import React from "react";
import Slider from "react-slick";
import classes from "./familyLaw.module.css";
import img from '../assets/familyLaw.jpeg'; // Ruta de tu imagen
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
            <div className={classes.container}>
                <div className={classes.imageContainer}>
                    <img src={img} alt="family law" className={classes.image}/>
                </div>
                <div className={classes.sliderContainer}>
                    <Slider {...settings}>
                        <div className={classes.sliderItem}>
                            <h3 className={classes.title}>Alimentos</h3>
                            <p className={classes.text}>
                                Brindamos asesoramiento en la gestión de pensiones alimenticias, asegurando el sustento de los menores
                                y facilitando acuerdos justos en situaciones de separación.
                            </p>
                        </div>
                        <div className={classes.sliderItem}>
                            <h3 className={classes.title}>Régimen de comunicación (visitas)</h3>
                            <p className={classes.text}>
                                Orientamos en el establecimiento de derechos de visita, garantizando que la relación entre padres e hijos
                                se mantenga saludable y equitativa.
                            </p>
                        </div>
                        <div className={classes.sliderItem}>
                            <h3 className={classes.title}>Cuidado personal (custodias)</h3>
                            <p className={classes.text}>
                                Acompañamos a las familias en procesos de custodia, priorizando el bienestar de los menores y promoviendo
                                soluciones que respeten sus derechos.
                            </p>
                        </div>
                        <div className={classes.sliderItem}>
                            <h3 className={classes.title}>Filiación</h3>
                            <p className={classes.text}>
                                Asistimos en la determinación de vínculos familiares, asegurando la protección legal de los derechos de
                                los involucrados en cada situación.
                            </p>
                        </div>
                        <div className={classes.sliderItem}>
                            <h3 className={classes.title}>Violencia Familiar</h3>
                            <p className={classes.text}>
                                Ofrecemos apoyo legal y psicológico para víctimas de violencia familiar, garantizando su seguridad
                                y promoviendo la justicia en cada caso.
                            </p>
                        </div>
                        <div className={classes.sliderItem}>
                            <h3 className={classes.title}>Adopción</h3>
                            <p className={classes.text}>
                                Facilitamos el proceso de adopción, asegurando el cumplimiento de las normativas legales y protegiendo
                                los intereses de los niños involucrados.
                            </p>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default FamilyLaw;
