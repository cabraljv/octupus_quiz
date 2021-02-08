import styled from 'styled-components/native';
import theme from '../../styles/themes';

export const Container = styled.View`
  flex: 1;
  background: ${theme.white};
  padding: 60px 30px;
`;

export const QuestionsNumber = styled.View`
  flex-direction: row;
  margin: 0 auto;
`;
export const CorrectQuestions = styled.Text`
  font-size: 86px;
  font-weight: bold;
  color: ${theme.primary};
`;
export const AllQuestions = styled.Text`
  margin-top: auto;
  margin-bottom: 20px;
  font-size: 24px;
  color: ${theme.secondary};
`;

export const ButtonResetText = styled.Text`
  text-transform: uppercase;
  color: ${theme.white};
  padding: 10px 0;
  font-size: 18px;
  font-weight: bold;
`;
export const ButtonReset = styled.TouchableOpacity`
  background: ${theme.primary};
  border-radius: 5px;
  elevation: 5;
  width: 70%;
  align-items: center;
  margin-top: auto;
  margin-left: auto;
`;

export const QuestionsNumberDescription = styled.Text`
  font-size: 22px;
  color: ${theme.secondary};
`;
