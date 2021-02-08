import styled from 'styled-components/native';
import theme from '../../styles/themes';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.white};
  padding: 50px 30px;
`;

export const BackButtonText = styled.Text`
  font-size: 16px;
  color: ${theme.primary};
`;

export const BackButton = styled.TouchableOpacity``;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  padding: 0 50px;
  justify-content: space-between;
  align-items: center;
`;

export const Footer = styled.View`
  margin-top: auto;
`;

export const AwnsersContainer = styled.View`
  margin-top: 20px;
`;

export const QuestionText = styled.Text`
  margin-top: 30px;
  font-size: 18px;
  color: ${theme.secondary};
`;

export const QuestionImage = styled.Image`
  width: 80%;
  height: 180px;
  margin: 0 auto;
`;

export const NextButton = styled.TouchableOpacity`
  border-radius: 5px;
  padding: 8px 15px;

  background-color: ${(props) => (props.disabled ? '#808080' : theme.primary)};
  elevation: 5;
`;

export const NextButtonText = styled.Text`
  font-size: 16px;
  color: ${theme.white};
`;

export const AwnsersGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;
