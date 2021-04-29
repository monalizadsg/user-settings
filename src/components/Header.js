import React from "react";
import logo from "../assets/SPCE-Logotype_Black.svg";
import { Container, Typography } from "@material-ui/core";
import "./Header.scss";

const Header = () => {
  return (
    <div className='header'>
      <Container maxWidth='xl' className='container'>
        <img src={logo} alt='spce logo' height='35' />
        <div className='avatar'>
          <Typography className='avatar-content'>HE</Typography>
        </div>
      </Container>
    </div>
  );
};

export default Header;
