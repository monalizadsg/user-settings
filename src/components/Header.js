import React from "react";
import logo from "../assets/SPCE-Logotype_Black.svg";
import { Typography } from "@material-ui/core";

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt='spce logo' height='35' />
      <div className='avatar'>
        <Typography className='avatar-content'>HE</Typography>
      </div>
    </div>
  );
};

export default Header;
