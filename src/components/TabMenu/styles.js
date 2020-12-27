import styled from 'styled-components/native';

export const Container = styled.View``;

export const TabsContainer = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const TabItem = styled.TouchableOpacity`
  border-bottom-width: 4px;
  border-bottom-color: ${({colors, selected}) =>
    selected ? colors.accent : 'transparent'};
  padding: 6px;
`;

export const Text = styled.Text`
  font-family: Quicksand-Bold;
`;
