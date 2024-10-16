import React from "react";
import Slider from "react-slick";
import classes from "./civilAndCommercialLaw.module.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import backgroundImage from '../assets/backgroundCivil3.jpeg';

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
        <div className={classes.root} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <p className={classes.title}>Derecho civil y comercial</p>
            <div className={classes.sliderContainer}>
                <Slider {...settings}>
                    <div className={classes.sliderItem}>
                        <div className={classes.sliderItemContainer}>
                            <h3>Sucesiones</h3>
                            <p className={classes.text}>
                                Te asistimos en el proceso sucesorio para garantizar una transmisión ordenada y ágil de los bienes, evitando conflictos entre los herederos. Acompañamos desde la apertura de la sucesión hasta la partición final, asegurando el cumplimiento de las disposiciones legales y testamentarias.
                            </p>
                        </div>
                    </div>
                    <div className={classes.sliderItem}>
                        <div className={classes.sliderItemContainer}>
                            <h3>Daños y perjuicios</h3>
                            <p className={classes.text}>
                                Te ayudamos a reclamar la reparación integral de daños materiales y morales sufridos por acciones u omisiones de terceros. Gestionamos negociaciones y demandas judiciales para que obtengas la indemnización justa por los perjuicios ocasionados.
                            </p>
                        </div>
                    </div>
                    <div className={classes.sliderItem}>
                        <div className={classes.sliderItemContainer}>
                            <h3>Reclamos de terceros / Accidentes de tránsito</h3>
                            <p className={classes.text}>
                                Asesoramos y representamos en reclamos derivados de accidentes de tránsito, tanto para conductores como para terceros afectados. Nos encargamos de gestionar indemnizaciones por daños a personas y bienes, negociando con compañías aseguradoras o iniciando acciones legales cuando sea necesario.
                            </p>
                        </div>
                    </div>
                    <div className={classes.sliderItem}>
                        <div className={classes.sliderItemContainer}>
                            <h3>Usucapión (prescripción adquisitiva)</h3>
                            <p className={classes.text}>
                                Te asesoramos en los trámites de usucapión para que puedas regularizar la posesión de inmuebles adquiridos por el uso prolongado en el tiempo. Acompañamos desde la presentación de pruebas hasta la obtención de la sentencia judicial que reconozca tus derechos como propietario.
                            </p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default CivilAndCommercialLaw;

