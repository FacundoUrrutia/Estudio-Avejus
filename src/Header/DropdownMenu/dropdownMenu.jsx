import React from "react";
import classes from "./dropdownMenu.module.css";

const DropdownMenu = (props) => {
  const { isOpen, handleClose, items } = props;

  const handleItemClick = (top) => {
        window.scrollTo({
        top: top,
        behavior: "smooth",
        });
        handleClose();
  };

  return (
    <div className={`${classes.root} ${isOpen ? classes.open : ""}`}>
        <ul className={classes.menuList}>
            {items.map((item, index) => (
                <li
                    key={index}
                    className={classes.menuItem}
                    onClick={() => handleItemClick(item.topMobile)}
                >
                    {item.name}
                </li>
            ))}
        </ul>
    </div>
  );
};

export default DropdownMenu;
