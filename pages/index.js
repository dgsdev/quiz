import styled from "styled-components";
import db from "../db.json";
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Head from 'next/head'
import QuizLogo from '../src/components/QuizLogo';

//const BackgroundImage = styled.div`
//  background-image: url(${db.bg});
//  flex: 1;
//  background-size: cover;
//  background-position: center;
//`;

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
  return (    
    <QuizBackground backgroundImage={db.bg}>    
    <Head>    
     <title>Quiz FullStack Developer</title>
     <meta name="title" content="Quiz FullStack Developer" /> 
     <meta name="description" content="Quiz com React e NextJS criado durante Imersão Alura v2 ;)"></meta>
     <meta property="og:title" content="Quiz FullStack Developer" />
     <meta property="og:image" content={db.bg}></meta>
    </Head>      
      <QuizContainer>
      <QuizLogo />
        <Widget>        
            <Widget.Header>
              <h1>Quiz FullStack Developer</h1>
            </Widget.Header>
         <Widget.Content>
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
  );
}
