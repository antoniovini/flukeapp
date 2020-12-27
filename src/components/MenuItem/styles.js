import styled from 'styled-components/native';

export const Text = styled.Text`
  font-family: Quicksand-Bold;
  font-size: 28px;
  padding-left: 10px;
  padding-right: 10px;

  color: ${({selected}) => selected ? "#000" : "#bdc3c7"}
`;