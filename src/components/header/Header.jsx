import { CaretDownOutlined } from "@ant-design/icons";
import React from "react";
import Logo from "../../assets/image/logo1366.svg";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="profileWrapper">
        <div className="profileImg"></div>
        <div>
          <CaretDownOutlined />
        </div>
      </div>
    </div>
  );
};

export default Header;
