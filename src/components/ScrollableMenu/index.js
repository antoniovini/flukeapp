import React, { useEffect, useRef } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';

import { 
  useSharedValue, 
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import { 
  Container,
  EmptySpace,
  Paginator,
  PaginatorContainer
} from './styles';

const width = Math.floor(Dimensions.get('window').width);

const ScrollableMenu = ({ children, selected=0 }) => {
  const { colors } = useTheme();
  const ref = useRef(null);

  const selectedWidth = useSharedValue(10, true);

  useEffect(() => {
    selectedWidth.value = 10;
    selectedWidth.value = withTiming(60, { duration: 500 });

    if(ref.current){
      ref.current.scrollTo({x: selected * 120, y: 0, animated: true});
    }
  }, [selected]);

  return (
    <Container>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ref={ref}
      >
        <EmptySpace />
        {children}
      </ScrollView>
      <PaginatorContainer>
        { children.map((_, index) => (
          <Paginator 
            selected={index === selected} 
            color={colors.accent} 
            key={index}
            style={useAnimatedStyle(() => ({
              width: index === selected ? selectedWidth.value : 10,
            }))}
          />
        ))}
      </PaginatorContainer>
    </Container>
  );
}

export default ScrollableMenu;