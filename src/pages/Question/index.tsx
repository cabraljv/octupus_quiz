import React, {useState, useCallback, useEffect} from 'react';
import Header from '../../components/QuestionHeader';
import Awnser from '../../components/Awnser';
import AwnsersIndicator from '../../components/AwnsersIndicator';
import {connect, useDispatch} from 'react-redux';

import {useNavigation} from '@react-navigation/native';

import {Question as IQuestion} from '../../store/modules/question/types';

import {
  Container,
  QuestionImage,
  QuestionText,
  AwnsersContainer,
  Footer,
  ButtonsContainer,
  BackButton,
  BackButtonText,
  NextButton,
  NextButtonText,
  AwnsersGroup,
} from './styles';
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
  questions: IQuestion[];
}

const Question: React.FC<Props> = ({questions}) => {
  const [showAwnsers, setShowAwnsers] = useState(false);

  const [atualQuestion, setAtualQuestion] = useState<IQuestion>();

  const dispatch = useDispatch();

  const navigation = useNavigation<StackNavigationProp<any>>();

  const handleSelectAwnser = useCallback(
    (response: boolean) => {
      setShowAwnsers(true);
      dispatch({
        type: 'RESPONSE_QUESTION',
        question: {...atualQuestion, response: response ? 'CORRECT' : 'WRONG'},
      });
    },
    [atualQuestion, dispatch],
  );

  useEffect(() => {
    if (questions) {
      const question = questions.filter((item) => item.response === 'NONE');

      setAtualQuestion(question[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickNext = useCallback(() => {
    const awnsers_question = questions.filter(
      (item) => item.response !== 'NONE',
    );
    if (awnsers_question.length === 15) {
      navigation.push('FinalScreen');
    } else {
      navigation.push('Question');
    }
  }, [questions, navigation]);

  return (
    <>
      <Header />
      <Container>
        <QuestionImage
          source={{
            uri: atualQuestion?.img,
          }}
        />

        <QuestionText>Qual país é esse?</QuestionText>
        <AwnsersContainer>
          <AwnsersGroup>
            {atualQuestion?.awnsers.map(
              (item, index) =>
                index <= 1 && (
                  <Awnser
                    key={item.label}
                    content={item.label}
                    correct={item.correct}
                    show={showAwnsers}
                    handleClick={handleSelectAwnser}
                  />
                ),
            )}
          </AwnsersGroup>
          <AwnsersGroup>
            {atualQuestion?.awnsers.map(
              (item, index) =>
                index >= 2 && (
                  <Awnser
                    key={item.label}
                    content={item.label}
                    correct={item.correct}
                    show={showAwnsers}
                    handleClick={handleSelectAwnser}
                  />
                ),
            )}
          </AwnsersGroup>
        </AwnsersContainer>
        <Footer>
          <ButtonsContainer>
            <BackButton>
              <BackButtonText onPress={() => navigation.goBack()}>
                Anterior
              </BackButtonText>
            </BackButton>
            <NextButton disabled={!showAwnsers} onPress={handleClickNext}>
              <NextButtonText>Próximo</NextButtonText>
            </NextButton>
          </ButtonsContainer>
          <AwnsersIndicator />
        </Footer>
      </Container>
    </>
  );
};

export default connect((state: IQuestion[]) => ({
  questions: state,
}))(Question);
