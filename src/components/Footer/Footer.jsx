import React from 'react';
import Logo from '../../img/Logo.png';
import { FooterBase, FooterImage } from '../../styles/Footer.styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <FooterImage src={Logo} alt="Logo Footer" />
      </a>
      <p>
        Um projeto de Caio Gabriel Ferreira
      </p>
    </FooterBase>
  );
}

export default Footer;