import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import natureImage from "../../assets/nature.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Leave the road, take the trails</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={natureImage} alt="A table of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
