import React, { useState, useEffect } from "react";
import Header from "../Header/header";
import WhoWeAre from "../WhoWeAre/whoWeAre";
import FamilyLaw from "../FamilyLaw/familyLaw";
import LaborLaw from "../LaborLaw/laborLaw";
import CivilAndCommercialLaw from "../CivilAndCommercialLaw/civilAndCommercialLaw";
import ContactUs from "../ContactUs/contactUs";
import Footer from "../Footer/footer";
import classes from './homePage.module.css';
import CriminalLaw from "../CriminalLaw/criminalLaw";

const HomePage = () => {
    const [width, setWidth] = useState(window.innerWidth);  

    const itemsHeader = [
        { name: "Quienes somos", top: 40 , topMobile: 20},
        { name: "Derecho de familia", top: 700 , topMobile: 850},
        { name: "Derecho laboral", top: 1250 , topMobile: 1850},
        { name: "Derecho civil y comercial", top: 2000 , topMobile: 3150},
        { name: "Derecho penal", top: 2500 , topMobile: 3800},
        { name: "Contacto", top: 3100 , topMobile: 4600},
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
        <FamilyLaw />
        <LaborLaw handleLinkClick={handleLinkClick} isMobile={isMobile}/>
        <CivilAndCommercialLaw />
        <CriminalLaw/>
        <ContactUs />
        <Footer />
        </div>
    );
};

export default HomePage;
