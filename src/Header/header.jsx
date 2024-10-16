import React, { useState } from "react";
import logoImg from "../assets/logo.png";
import classes from "./header.module.css";
import imgMenu from "../assets/MonoIconsMenu.svg";
import DropdownMenu from "./DropdownMenu/dropdownMenu";
import iconWsp from '../assets/iconsWsp.svg';

const Header = ({ isMobile, handleLinkClick, itemsHeader }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClick = () => {
    setIsOpen(!isOpen);
  }

  console.log(isMobile)

  return (
    <>
        <div className={classes.root}>
            <div className={classes.container}>
                <button className={classes.dropdownButton} onClick={handleOpenClick}>
                    <img
                    src={imgMenu}
                    alt="menu icon"
                    width={60}
                    height={60}
                    className={classes.imgMenu}
                    />
                </button>
                <button className={classes.buttonLogo} onClick={() => handleLinkClick(0)}>
                    <img
                    src={logoImg}
                    alt="Logo"
                    width={isMobile ? 100 : 120}
                    height={isMobile ? 90 : 90}
                    className={classes.imgLogo}
                    />
                </button>
            <a href="https://wa.me/1133381119" target="_blank" className={classes.wsp}> 
                <img src={iconWsp} alt="icon wsp" width={40} height={40}/>
            </a>
            <ul className={classes.navList}>
                {!isMobile &&
                itemsHeader.map((item, index) => (
                    <li
                    key={index}
                    className={classes.navItem}
                    onClick={() => handleLinkClick(item.top)}
                    >
                    {item.name}
                    </li>
                ))}
            </ul>
            </div>
        </div>
        <DropdownMenu
            isOpen={isOpen}
            handleClose={() => setIsOpen(false)}
            items={itemsHeader}
        />
    </>
  );
};

export default Header;
