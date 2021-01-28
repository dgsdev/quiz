/* eslint-disable linebreak-style */
// src/components/QuizBackground/index.js
import styled from 'styled-components';

const QuizBackground = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;
  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: "";
      background-size: cover;
      background-position: center;
      background-image:
        linear-gradient(transparent, ${({ theme }) => theme.colors.mainBg}),
        url(${({ backgroundImage }) => backgroundImage});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;     
      z-index: 1;    
    } 
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
/*
.video-bg {
  object-fit: cover;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;  
  width: 100%; 
  z-index: -1;
}
@media (min-aspect-ratio: 16/9) {
    .video-bg {
        width:100%;
        height: auto;
    }
}
@media (max-aspect-ratio: 16/9) {
    .video-bg { 
        width:auto;
        height: 100%;
    }
}
@media (max-width: 767px) {
    .video-bg {
       width:auto;
        height: 100%;
        /*display: none;
    }
}    
    @media (max-width: 415px) {
    .video-bg { 
        width:auto;      
        height: 250px;         
    }
}
*/ 
  
`;

export default QuizBackground;
