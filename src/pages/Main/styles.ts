import styled from 'styled-components/native';

import theme from '../../styles/themes';

export const Container = styled.View`
  flex: 1;
  background: ${theme.white};
  padding: 60px 30px;
`;
export const Title = styled.Text`
  margin: 0 auto;
  font-size: 36px;
  font-weight: bold;
  color: ${theme.secondary};
`;
export const Description = styled.Text`
  margin-top: 40px;
  font-size: 16px;
  opacity: 0.7;
`;
export const Logo = styled.Image`
  margin: 0 auto;
`;
export const NextStapButton = styled.TouchableOpacity`
  background: ${theme.primary};
  border-radius: 5px;
  elevation: 3;
`;
export const NextStapButtonText = styled.Text`
  color: ${theme.white};
  padding: 10px 25px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
`;
export const ButtonContainer = styled.View`
  margin: 30px auto;
  margin-top: auto;
`;
