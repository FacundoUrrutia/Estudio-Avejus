import React from "react";
import Slider from "react-slick";
import classes from "./civilAndCommercialLaw.module.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CivilAndCommercialLaw = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
        {
            breakpoint: 960,
            settings: {
            slidesToShow: 1,
            },
        },
        ],
    };

    return (
        <div className={classes.root}>
            <p className={classes.title}>Derecho civil y comercial</p>
            <div className={classes.sliderContainer}>
            <Slider {...settings}>
                <div className={classes.sliderItem}>
                    <div className={classes.sliderItemContainer}>
                        <h3>Sucesiones</h3>
                        <p className={classes.text}>
                            Brindamos apoyo integral en la planificación y distribución del patrimonio familiar, garantizando la seguridad jurídica.
                        </p>
                    </div>
                </div>
                <div className={classes.sliderItem}>
                    <div className={classes.sliderItemContainer}>
                        <h3>Daños y perjuicios</h3>
                        <p className={classes.text}>
                            Asesoramos en la presentación de reclamos por daños y perjuicios para asegurar la reparación justa y oportuna.
                        </p>
                    </div>
                </div>
                <div className={classes.sliderItem}>
                    <div className={classes.sliderItemContainer}>
                        <h3>Reclamos de terceros / Accidentes de tránsito</h3>
                        <p className={classes.text}>
                            Defendemos tus derechos frente a terceros en casos de accidentes de tránsito, buscando la compensación adecuada.
                        </p>
                    </div>
                </div>
                <div className={classes.sliderItem}>
                    <div className={classes.sliderItemContainer}>
                        <h3>Usucapión (prescripción adquisitiva)</h3>
                        <p className={classes.text}>
                            Te asesoramos en procesos de usucapión, ayudando a regularizar la propiedad de inmuebles mediante la prescripción adquisitiva.
                        </p>
                    </div>
                </div>
            </Slider>
            </div>
        </div>
    );
};

export default CivilAndCommercialLaw;

