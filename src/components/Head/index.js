/* eslint-disable linebreak-style */
import React from 'react';
import Head from 'next/head';
import db from '../../../db.json';

export default function Home({ bg, title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:locale" content="pt_BR" />

      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="Quiz Universo Marvel" />
      <meta property="og:description" content={description} />

      <meta property="og:url" content="https://quiz.dgsdev.vercel.app/" />

      <meta property="og:image" content={db.bg} />
      <meta property="og:image:secure_url" content={db.bg} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
      <meta property="og:type" content="website" />

      <meta charSet="utf-8" />

      <link rel="canonical" href="https://quiz-beta.vercel.app/" />
      <link rel="shortcut icon" href="https://ik.imagekit.io/feq0hccnlg/marvel-logo-34297-32x32_gTH6RJHHz.ico" />
    </Head>
  );
}
