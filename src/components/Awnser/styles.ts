import styled from 'styled-components/native';

import theme from '../../styles/themes';

interface Props {
  correct: boolean;
  show: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
  background: ${(props) =>
    props.show ? (props.correct ? theme.correct : theme.wrong) : theme.white};
  border: 0.5px solid #d4d4d4;
  elevation: 3;
  width: 48%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

interface TextProps {
  show: boolean;
}

export const TextContent = styled.Text<TextProps>`
  font-size: 14px;
  color: ${(props) => (props.show ? theme.white : '#808080')};
`;
