import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const EmptySpace = styled.View`
  width: 40px;
`;

export const PaginatorContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  flex: 1;
  margin-top: 10px;
`;

export const Paginator = styled(Animated.View)`
  height: 10px;
  background-color: ${({color}) => color};
  margin-right: 10px;
  border-radius: 5px;
`;