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
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>Quiz FullStack Developer</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault();

                router.push(`/quiz?name=${name}`);

                console.log('Fazendo uma submissão por meio do React');

              // router manda para a próxima page
              }}
              >
                <input
                  onChange={function (infosDoEvento) {
                    console.log(infosDoEvento.target.value);
                    // State
                    // name = infosDoEvento.target.value;
                    setName(infosDoEvento.target.value);
                  }}
                  placeholder="Qual seu nome?"
                />
                <button type="submit" disabled={name.length === 0}>
                  Jogar
                  {name}
                </button>
              </form>
              <p>
                O desenvolvedor full stack é capaz de trabalhar com toda a pilha de
                desenvolvimento de um projeto. Além de conseguir atuar com o
                front-end e o back-end, esse profissional também pode contribuir em
                todas as etapas e partes de um sistema, como o servidor e o banco de
                dados.
              </p>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Header>
              <h1>Dgsdev FullStack Developer</h1>
            </Widget.Header>
            <Widget.Content>
              <p>
                Um desenvolvedor fullstack é aquele que atua não somente no front e
                no back-end, mas sim em todas as etapas e partes do desenvolvimento,
                como o banco de dados e servidor.
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
