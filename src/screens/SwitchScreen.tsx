import React, {useContext, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';
import {ThemeContext} from '../context/ThemeContext/ThemeContext';

const SwitchScreen = () => {
  const [state, setstate] = useState({
    isActive: false,
    isHungry: true,
    isHappy: true,
  });

  const {isActive, isHungry, isHappy} = {...state};
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const onChange = (value: boolean, field: string) => {
    setstate({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={{marginHorizontal: 20}}>
      <HeaderTitle title="Switches" />
      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>isActive</Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>isHungry</Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>isHappy</Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>
      <Text style={{...styles.switchText, color: colors.text}}>
        {' '}
        {JSON.stringify(state, null, 5)}
      </Text>
    </View>
  );
};

export default SwitchScreen;

export const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchText: {
    fontSize: 25,
  },
});
