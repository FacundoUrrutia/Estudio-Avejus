import React, { useState, useEffect } from "react";
import Header from "../Header/header";
import WhoWeAre from "../WhoWeAre/whoWeAre";
import WorkAccidents from "../WorkAccidents/workAccidents";
import FamilyLaw from "../FamilyLaw/familyLaw";
import LaborLaw from "../LaborLaw/laborLaw";
import CivilAndCommercialLaw from "../CivilAndCommercialLaw/civilAndCommercialLaw";
import ContactUs from "../ContactUs/contactUs";
import Footer from "../Footer/footer";
import classes from './homePage.module.css';

const HomePage = () => {
    const [width, setWidth] = useState(window.innerWidth);  

    const itemsHeader = [
        { name: "Quienes somos", top: 0 , topMobile: 0},
        { name: "Accidentes de trabajo", top: 400 , topMobile: 600},
        { name: "Derecho de familia", top: 1000 , topMobile: 1100},
        { name: "Derecho laboral", top: 1600 , topMobile: 1950},
        { name: "Derecho civil y comercial", top: 1900 , topMobile: 2650},
        { name: "Contacto", top: 2800 , topMobile: 3300},
    ];

    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleLinkClick = (top) => {
        window.scrollTo({
        top: top,
        behavior: "smooth",
        });
    };

    const isMobile = width < 900;

    return (
        <div className={classes.root}>
        <Header 
            isMobile={isMobile} 
            handleLinkClick={handleLinkClick} 
            itemsHeader={itemsHeader} 
        />
        <WhoWeAre handleLinkClick={handleLinkClick} isMobile={isMobile}/>
        <WorkAccidents />
        <FamilyLaw />
        <LaborLaw handleLinkClick={handleLinkClick} isMobile={isMobile}/>
        <CivilAndCommercialLaw />
        <ContactUs />
        <Footer />
        </div>
    );
};

export default HomePage;
