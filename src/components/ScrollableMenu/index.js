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

const ScrollableMenu = ({ children, selected=0 }) => {
  // get the theme colors from the context
  const { colors } = useTheme();

  // create ref to scroll the ScrollView
  const ref = useRef(null);

  // animation data
  const selectedWidth = useSharedValue(10, true);

  useEffect(() => {
    // reset the animation value
    selectedWidth.value = 10;

    // apply the animation in 500 ms
    selectedWidth.value = withTiming(60, { duration: 500 });

    if(ref.current){
      // scroll the scroll view to selected prop
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