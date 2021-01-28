/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Head from '../src/components/Head';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

// const BackgroundImage = styled.div`
//  background-image: url(${db.bg});
//  flex: 1;
//  background-size: cover;
//  background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('retorno do useState', name, setName);
  return (
    <>
      <Head title={db.title} image={db.bg} description={db.description} />
      {/* backgroundImage={db.bg} */}
      <QuizBackground backgroundImage={db.bg}>
        {/*
        <div className="video">
          <video video="" autobuffer="" autoPlay="autoplay" muted="muted" loop="loop" playsinline="" poster="sop-gradient-bg.jpg" className="video-bg">
            <source src="https://ik.imagekit.io/feq0hccnlg/1564676115-marvel_tICIf9xFN.mp4" type="video/mp4" />
          </video>
        </div>
        */}
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>Quiz Universo Marvel</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault();

                router.push(`/quiz?name=${name}`);

                console.log('Fazendo uma submissão por meio do React');

              // router manda para a próxima page
              }}
              >
                <Input
                  name="nomeDoUsuario"
                  onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                  placeholder="Qual seu nome?"
                  value={name}
                />
                <Button type="submit" disabled={name.length === 0}>
                 <strong>{`Jogar Quiz ${name}`}</strong>
                </Button>
              </form>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Header>
              <h1>Melhores Quizes da Galera</h1>
            </Widget.Header> 
            <Widget.Content>
              <p>
                O Marvel é uma franquia de mídia que produz uma série de 
                filmes de super-heróis, baseada em personagens que 
                aparecem nas revistas em quadrinhos americanas publicadas 
                pela Marvel Comics.
              </p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/dgsdev" />
      </QuizBackground>
    </>
  );
}
