import React from "react";
import SignOut from "./SignOut";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h2>Chat-Now</h2>
      <SignOut />
        <i className="fab fa-react"></i>
      </div>
    </header>
  );
};

export default Header;
