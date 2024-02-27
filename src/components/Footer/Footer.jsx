import React from 'react';
import Logo from '../../img/Logo.png';
import { FooterBase, FooterImage } from '../../styles/Footer.styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.linkedin.com/in/caio-gferreira/">
        <FooterImage src={Logo} alt="Logo Footer" />
      </a>
      <p>
        Um projeto de Caio Gabriel Ferreira
      </p>
    </FooterBase>
  );
}

export default Footer;