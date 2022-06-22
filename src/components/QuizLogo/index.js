/* eslint-disable linebreak-style */
import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <img className={className} src="https://ik.imagekit.io/feq0hccnlg/marvel-logo-34288_rIH80AtjS.png" alt="Marvel Logo" />
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  width: 200px;
  @media screen and (max-width: 500px) {
    margin: 0 60px 0 60px;
  }
`;

export default QuizLogo;