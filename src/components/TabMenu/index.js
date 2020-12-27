import React from 'react';
import { useTheme } from 'react-native-paper';

import { Container, TabsContainer, TabItem, Text } from './styles';

const TabMenu = ({ children, selected=0, tabs=[], onSelect=()=>{}}) => {
  const { colors } = useTheme();

  return (
    <Container>
      <TabsContainer>
        { tabs.map((tab, index) => (
          <TabItem key={index}
            colors={colors}
            selected={index === selected}
            onPress={() => onSelect(index)}
          >
            <Text>{tab}</Text>
          </TabItem>
        ))}
      </TabsContainer>
      {children[selected]}
    </Container>
  );
}

export default TabMenu;