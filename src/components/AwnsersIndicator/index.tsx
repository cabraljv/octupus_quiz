import React from 'react';

import {Question as IQuestion} from '../../store/modules/question/types';

import {Container, Item} from './styles';
import {connect} from 'react-redux';

interface Props {
  questions: IQuestion[];
}

const AwnsersIndicator: React.FC<Props> = ({questions}) => {
  return (
    <Container>
      {questions.map((item) => (
        <Item status={item.response} key={item.id} />
      ))}
    </Container>
  );
};

export default connect((state: IQuestion[]) => ({
  questions: state,
}))(AwnsersIndicator);
