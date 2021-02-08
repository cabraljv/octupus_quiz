import React, {useMemo, useRef, useEffect} from 'react';
import QuestionHeader from '../../components/QuestionHeader';
import {connect, useDispatch} from 'react-redux';
import {Question as IQuestion} from '../../store/modules/question/types';
import {useNavigation} from '@react-navigation/native';
import {Animated} from 'react-native';

import {
  Container,
  QuestionsNumber,
  CorrectQuestions,
  AllQuestions,
  ButtonResetText,
  ButtonReset,
  QuestionsNumberDescription,
} from './styles';
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
  questions: IQuestion[];
}

const FinalScreen: React.FC<Props> = ({questions}) => {
  const verticalPosition = useRef(new Animated.Value(-60)).current;
  const itemsOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(verticalPosition, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(itemsOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigation = useNavigation<StackNavigationProp<any>>();

  const correctAwnsers = useMemo(
    () => questions.filter((item) => item.response === 'CORRECT').length,
    [questions],
  );

  const dispatch = useDispatch();

  function handlePlayAgain() {
    const new_questions = questions.map((item) => ({
      ...item,
      response: 'NONE',
    }));
    dispatch({
      type: 'ADD_QUESTIONS',
      questions: new_questions,
    });
    navigation.popToTop();
  }

  return (
    <>
      <QuestionHeader />
      <Container>
        <QuestionsNumberDescription
          as={Animated.Text}
          style={{
            top: verticalPosition,
            opacity: itemsOpacity,
          }}>
          Você acertou:{' '}
        </QuestionsNumberDescription>
        <QuestionsNumber
          as={Animated.View}
          style={{
            top: verticalPosition,
            opacity: itemsOpacity,
          }}>
          <CorrectQuestions>{correctAwnsers}</CorrectQuestions>
          <AllQuestions>/15</AllQuestions>
        </QuestionsNumber>
        <ButtonReset onPress={handlePlayAgain}>
          <ButtonResetText>Jogar novamente</ButtonResetText>
        </ButtonReset>
      </Container>
    </>
  );
};

export default connect((state: IQuestion[]) => ({
  questions: state,
}))(FinalScreen);
