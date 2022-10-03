import React, {useRef} from 'react';
import {Animated, Button, StyleSheet, View, Text} from 'react-native';

function FadeInAndOut() {
  const animation = useRef(new Animated.Value(1)).current;
  return (
    <View>
      <Animated.View style={[styles.rectangle, {opacity: animation}]}>
        <Button
          title="FadeIn"
          onPress={() => {
            Animated.timing(animation, {
              toValue: 1,
              useNativeDriver: true,
            }).start();
          }}
        />
        <Button
          title="FadeOut"
          onPress={() => {
            Animated.timing(animation, {
              toValue: 0,
              useNativeDriver: true,
            }).start();
          }}
        />
      </Animated.View>
    </View>
  );
}

const CalendarScreen = () => {
  return (
    <View style={styles.block}>
      <FadeInAndOut />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
  rectangle: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
  },
});

export default CalendarScreen;
