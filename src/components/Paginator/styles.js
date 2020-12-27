import styled from 'styled-components/native';

export const Container = styled.View`
  height: 60px;
  background-color: #ecf0f1;
  border-radius: 20px;

  flex-direction: row;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-family: Quicksand-Bold;
`;

export const Button = styled.TouchableOpacity`
  width: 60px;
  justify-content: center;
  align-items: center;
`;