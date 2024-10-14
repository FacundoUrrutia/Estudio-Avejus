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
                    <div>
                        <h3 className={classes.title}>Custodia de menores y divorcios</h3>
                        <p className={classes.text}>
                            Asesoramos en procesos de custodia, asegurando el bienestar de los menores y facilitando soluciones justas en divorcios.
                            Nuestro enfoque prioriza siempre el bienestar de los niños y la resolución pacífica entre las partes.
                        </p>
                    </div>
                    <div>
                        <h3 className={classes.title}>Alimentos y regímenes de visitas</h3>
                        <p className={classes.text}>
                            Proveemos orientación legal sobre pensiones alimenticias y garantizamos el cumplimiento de los derechos de visita de los padres.
                            Nos aseguramos de que todos los derechos sean protegidos y respetados.
                        </p>
                    </div>
                    <div>
                        <h3 className={classes.title}>Adopciones y tutela legal</h3>
                        <p className={classes.text}>
                            Apoyamos a familias en procesos de adopción, asegurando la legalidad y los mejores intereses del menor en cada caso.
                            Brindamos todo el apoyo necesario para que el proceso sea ágil y sin complicaciones.
                        </p>
                    </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default FamilyLaw;
