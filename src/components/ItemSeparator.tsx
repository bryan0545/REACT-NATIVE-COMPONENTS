import React, {useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext} from '../context/ThemeContext/ThemeContext';

const ItemSeparator = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <View
      style={{
        borderBottomWidth: 1,
        opacity: 0.5,
        marginVertical: 8,
        borderColor: theme.dividerColor,
      }}
    />
  );
};

export default ItemSeparator;
