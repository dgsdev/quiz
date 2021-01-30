/* eslint-disable linebreak-style */
// src/components/QuizBackground/index.js
import styled from 'styled-components';

const QuizBack = styled.div`  
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

export default QuizBack;
