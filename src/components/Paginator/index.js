import React from 'react';

import { Container, Button, Content, Text } from './styles';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Paginator = ({style, text="", onNext=()=>{}, onBack=()=>{}}) => {
  return (
    <Container
      style={style}
    >
      <Button
        onPress={onBack}
      >
        <Icon name="chevron-left" size={20} color={'#000'} />
      </Button>
      <Content>
        <Text>{text}</Text>
      </Content>
      <Button
        onPress={onNext}
      >
        <Icon name="chevron-right" size={20} color={'#000'} />
      </Button>
    </Container>
  );
}

export default Paginator;