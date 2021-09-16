import React, {useContext, useState} from 'react';
import {View, Switch, Platform} from 'react-native';
import {ThemeContext} from '../context/ThemeContext/ThemeContext';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

const CustomSwitch = ({isOn, onChange}: Props) => {
  const {
    theme: {colors},
    theme: {dark},
  } = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(isOn);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  const trackColor = dark
    ? {false: '#c2bebe', true: 'white'}
    : {false: 'grey)', true: colors.primary};
  return (
    <View>
      <Switch
        trackColor={{...trackColor}}
        thumbColor={Platform.OS === 'android' ? colors.primary : ''}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default CustomSwitch;
