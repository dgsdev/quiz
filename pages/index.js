/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Head from '../src/components/Head';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Link from '../src/components/Link';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBack from '../src/components/QuizBack';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

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
  // console.log('retorno do useState', name, setName);
  return (
    <>
      <Head title={db.title} image={db.bg} description={db.description} />
      {/* backgroundImage={db.bg} */}
      <QuizBack>
         <div className="video">
          <video video="" autobuffer="" autoPlay="autoplay" muted loop="loop" className="video-bg">
            <source src="https://ik.imagekit.io/feq0hccnlg/1564676115-marvel_tICIf9xFN.mp4" type="video/mp4" />
          </video>
        </div> 
        <QuizContainer>
          <QuizLogo />
          <Widget
            as={motion.div}
            transiton={{ delay: 0, duration: 0.5 }}
            variants={{
              show: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            Initial="hidden"
            animate="show"
          >
            <Widget.Header>
              <h1>Quiz Universo Marvel</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault();

                router.push(`/quiz?name=${name}`);

                // console.log('Fazendo uma submissão por meio do React');

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
          <Widget
            as={motion.section}
            transiton={{ delay: 0.5, duration: 0.5 }}
            variants={{
              show: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            Initial="hidden"
            animate="show"
          >
            <Widget.Header>
              <h1></h1>
            </Widget.Header>
            <Widget.Content>
              <ul>
                {db.external.map((linkExterno) => {
                  const [projectName, githubUser] = linkExterno
                    .replace(/\//g, '')
                    .replace('https:', '')
                    .replace('vercel.app', '')
                    .split('.');

                  return (
                    <li key={linkExterno}>
                      <Widget.Topic
                        //as={Link}
                        //href={`/quiz/${projectName}___${githubUser}`}
                      >
                        {`${githubUser}/${projectName}`}
                      </Widget.Topic>
                    </li>
                  );
                })}
              </ul>
            </Widget.Content>
          </Widget>
          <Footer
            as={motion.footer}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              show: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            initial="hidden"
            animate="show"
          />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/dgsdev" />
      </QuizBack>
    </>
  );
}
