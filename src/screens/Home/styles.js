import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const width = Math.floor(Dimensions.get('window').width);

export const Container = styled.View`
  background-color: ${({ colors }) => colors.primary};
  flex: 1;
`;

export const FullContainer = styled.View`
  width: ${width - 80}px;
  margin-left: 40px;
  margin-right: 40px;
`;

export const Title = styled.Text`
  font-size: 56px;
  font-family: Quicksand-Semibold;
`;

export const Text = styled.Text`
  /* font-size: 56px; */
  font-family: Quicksand-Bold;
`;

export const Normal = styled.Text`
  font-family: Quicksand-Regular;
`;

export const CenterContainer = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const InlineView = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

export const MinutesContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const LoadingContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`;