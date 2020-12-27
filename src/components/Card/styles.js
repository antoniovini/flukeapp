import styled from 'styled-components/native';
import { Card as PaperCard } from 'react-native-paper';

export const Card = styled(PaperCard)`
  background-color: ${({color}) => color};

  border-radius: 16px;

  height: 300px;

  padding-top: 40px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;

  justify-content: center;
  align-items: center;
`;
