import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from './styles';

const MenuItem = ({ text="", selected=false, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <Text selected={selected}>{text}</Text>
    </TouchableOpacity>
  );
}

export default MenuItem;