import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="separator-red">
      </div>
      <div className="footer-container">
        <div className="logo">
          <img src="/images/DH.png" alt="DH-logo" />
        </div>

        <div className="logos">
          <img className="logo-social" src="/images/ico-facebook.png" alt="facebook logo" />
          <img className="logo-social" src="/images/ico-instagram.png" alt="instagram logo" />
          <img className="logo-social" src="/images/ico-whatsapp.png" alt="whatsapp logo" />
          <img className="logo-social" src="/images/ico-tiktok.png" alt="tiktok logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;