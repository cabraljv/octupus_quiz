import styled from 'styled-components/native';
import theme from '../../styles/themes';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
`;

interface ItemProps {
  status: string;
}

export const Item = styled.View<ItemProps>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background: ${(props) =>
    props.status === 'CORRECT'
      ? theme.correct
      : props.status === 'WRONG'
      ? theme.wrong
      : '#C4C4C4'};
`;
