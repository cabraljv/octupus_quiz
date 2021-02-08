import React, {useRef, useEffect} from 'react';
import {StatusBar, Animated} from 'react-native';
import {
  Container,
  Title,
  Description,
  Logo,
  NextStapButton,
  NextStapButtonText,
  ButtonContainer,
} from './styles';

import {connect, useDispatch} from 'react-redux';

import {useNavigation} from '@react-navigation/native';

import theme from '../../styles/themes';
import apiData from '../../services/api';

import logo from '../../assets/logo/logo.png';
import {StackNavigationProp} from '@react-navigation/stack';

const Main: React.FC = () => {
  const verticalPosition = useRef(new Animated.Value(-60)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const descriptionOpacity = useRef(new Animated.Value(0)).current;

  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<any>>();

  useEffect(() => {
    Animated.parallel([
      Animated.timing(verticalPosition, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(descriptionOpacity, {
        toValue: 0.7,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const questions = apiData.map((item) => ({...item, response: 'NONE'}));

    dispatch({
      type: 'ADD_QUESTIONS',
      questions,
    });
  }, [dispatch]);

  return (
    <Container>
      <StatusBar backgroundColor={theme.primary} />
      <Logo
        source={logo}
        as={Animated.Image}
        style={{
          top: verticalPosition,
          opacity: logoOpacity,
        }}
      />
      <Title
        as={Animated.Text}
        style={{
          top: verticalPosition,
          opacity: logoOpacity,
        }}>
        Octupus Quiz
      </Title>
      <Description
        as={Animated.Text}
        style={{
          opacity: descriptionOpacity,
        }}>
        Esse é um quiz desenvolvido como desafio para o processo seletivo da
        Octupus
      </Description>
      <ButtonContainer
        as={Animated.View}
        style={{
          bottom: verticalPosition,
          opacity: logoOpacity,
        }}>
        <NextStapButton onPress={() => navigation.push('Question')}>
          <NextStapButtonText>Começar</NextStapButtonText>
        </NextStapButton>
      </ButtonContainer>
    </Container>
  );
};

export default connect()(Main);
