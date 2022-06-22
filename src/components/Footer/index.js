/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.MainBg};
  display: flex;
  align-items: center;
  border-radius: 10px; 
 
  img {
    width: 65px;
    padding-left: 20px;
    padding-top: 5px;
    margin: 4px;
  }
  a, p {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    padding-left: 2px;
    margin: 4px;
    text-decoration: none;
    transition: .1s;
    &:hover,
    &:focus {
      opacity: .7;         
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://github.com/dgsdev">
        <img src="https://ik.imagekit.io/feq0hccnlg/LogoMakr-06pF9c_AlNn40ZhU0.png" alt="Logo Dgsdev" />
      </a>
      <p>
        Feito com React e NextJS 2020 ;)
        {' '}
        <br />
        {' '}
        <a href="https://github.com/dgsdev/quiz">
          <span>Veja o Código do Projeto!</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
