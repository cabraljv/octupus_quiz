import styled from 'styled-components/native';
import theme from '../../styles/themes';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
  background: ${theme.white};
  elevation: 8;
`;

export const Logo = styled.Image`
  height: 42px;
  width: 31px;
  margin-left: 30px;
`;

export const Title = styled.Text`
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
  color: ${theme.secondary};
`;
