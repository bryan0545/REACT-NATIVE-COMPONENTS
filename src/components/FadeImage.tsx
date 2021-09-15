import React from 'react';
import {Animated, ImageStyle, StyleProp} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

const FadeImage = ({uri, style}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  return (
    <Animated.Image
      source={{uri}}
      onLoadEnd={fadeIn}
      style={{...(style as any), opacity}}
    />
  );
};

export default FadeImage;
