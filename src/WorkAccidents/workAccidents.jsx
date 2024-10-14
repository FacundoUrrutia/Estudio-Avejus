import React from "react";
import Slider from "react-slick";
import classes from "./workAccidents.module.css";
import img1 from "../assets/workAccidents1.jpeg";
import img2 from "../assets/workAccidents2.jpeg";
import img3 from "../assets/workAccidents3.jpeg";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const WorkAccidents = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
            <p  className={classes.title}>Accidentes de Trabajo</p>
            <div className={classes.sliderContainer}>
                <Slider {...settings}>
                    <div className={classes.sliderItem}>
                        <img src={img1} alt="Protección de trabajo" className={classes.image}/>
                        <p className={classes.text}>
                            Proporcionamos asesoría legal para asegurar condiciones laborales seguras y defender tus derechos.
                        </p>
                    </div>
                    <div className={classes.sliderItem}>
                        <img src={img2} alt="Formulario de reclamación" className={classes.image}/>
                        <p className={classes.text}>
                            Te ayudamos a gestionar la documentación y reclamaciones necesarias tras un accidente laboral.
                        </p>
                    </div>
                    <div className={classes.sliderItem}>
                        <img src={img3} alt="Equipo de abogados" className={classes.image}/>
                        <p className={classes.text}>
                            Nuestro equipo de abogados especializados en accidentes laborales trabajará para obtener una resolución justa.
                        </p>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default WorkAccidents;
