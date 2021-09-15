import React from 'react';
import {StyleSheet, Animated, Button, View} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

const Animation101Screen = () => {
  const {fadeIn, fadeOut, opacity, startMovingPosition, position} =
    useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          marginBottom: 20,
          transform: [
            {
              translateY: position,
            },
          ],
        }}
      />
      <Button
        title="FadeIn"
        onPress={() => {
          fadeIn();
          startMovingPosition(-100);
        }}
      />
      <Button title="FadeOn" onPress={fadeOut} />
    </View>
  );
};

export default Animation101Screen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
