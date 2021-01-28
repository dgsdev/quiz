/* eslint-disable linebreak-style */
import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) =>  theme.colors.mainBg};  
  border-radius: 10px;
  overflow: hidden;

  h1,
  h2,
  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  // eslint-disable-next-line linebreak-style
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  `;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

/*
& input {
  height: 40px;
  width: 100%;
  padding: 0 15px;
  margin: 16px 0;
  color: ${({ theme }) => theme.colors.contrastText};
  font-size: 14px;
  letter-spacing: 0.15px;
  border: 1px solid ${({ theme }) => theme.colors.contrastText};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.mainBg};
  outline: none;
  transition: .35s;
}
& input:focus {
  border-color: ${({ theme }) => theme.colors.inputFocus};
 
}

& button {
  height: 40px;
  width: 100%;
  color: ${({ theme }) => theme.colors.contrastText};
  font-weight: bold;
  border: none;
  font-size: 14px;
  letter-spacing: 0.15px;
  border-radius: 8px;  
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  transition: .35s;
}
& button:hover {
  background-color: ${({ theme }) => theme.colors.red};
  font-weight: bold;
}
& a {
  height: 40px;
  width: 100%;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  color: ${({ theme }) => theme.colors.contrastText};
  background: rgba(33, 150, 243, 0.35);
  text-decoration: none;
  border-radius: 10px;
  transition: .35s;
}
& a:hover {
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: .8;
}
`;*/

export default Widget;