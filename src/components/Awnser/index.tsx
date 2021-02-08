import React from 'react';

import {Container, TextContent} from './styles';

interface Props {
  correct: boolean;
  show: boolean;
  content: string;
  handleClick: (correct: boolean) => void;
}

const Awnser: React.FC<Props> = ({content, handleClick, correct, show}) => {
  return (
    <Container
      onPress={() => handleClick(correct)}
      show={show}
      disabled={show}
      correct={correct}>
      <TextContent show={show}>{content}</TextContent>
    </Container>
  );
};

export default Awnser;
