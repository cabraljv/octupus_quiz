import React from 'react';

import {Container, Logo, Title} from './styles';

import logo from '../../assets/logo/logo.png';

const QuestionHeader: React.FC = () => {
  return (
    <Container>
      <Logo source={logo} />
      <Title>Octupus Quiz</Title>
    </Container>
  );
};

export default QuestionHeader;
