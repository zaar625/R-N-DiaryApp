import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import TransparentCicleButton from './TransparentCicleButton';

const WriteHeader = ({onSave}) => {
  const navigation = useNavigation();
  const onGoBack = () => {
    navigation.pop();
  };
  return (
    <View style={styles.block}>
      <View style={styles.iconButtonWrapper}>
        <TransparentCicleButton
          onPress={onGoBack}
          name="arrow-back"
          color="#424242"
        />
      </View>
      <View style={styles.buttons}>
        <TransparentCicleButton
          name="delete-forever"
          color="#ef5350"
          hasMarginRight
        />
        <TransparentCicleButton name="check" color="#009688" onPress={onSave} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default WriteHeader;
