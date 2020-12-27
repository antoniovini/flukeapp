import React from 'react';

import { useTheme } from 'react-native-paper';
import { Card as StyledCard } from './styles';

const Card = ({children}) => {
  // get the theme colors from the context
  const { colors } = useTheme();

  return (
    <StyledCard
      elevation={0}
      color={colors.accent}
    >
      {children}
    </StyledCard>
  );
}

export default Card;