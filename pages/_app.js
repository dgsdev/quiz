/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';
import db from '../db.json';
import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }    
  body {
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;

    color: ${({ theme }) => theme.colors.contrastText};    
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Import CSS for nprogress */}
        <link rel="stylesheet" type="text/css" href="#" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
