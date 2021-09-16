import {useNavigation} from '@react-navigation/core';
import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../context/ThemeContext/ThemeContext';
import {MenuItem} from '../interfaces/appInterfaces';

interface Props {
  menuItem: MenuItem;
}

const FlatListItem = ({menuItem}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(menuItem.component);
      }}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} size={23} color={colors.primary} />
        <Text style={{...styles.itemText, color: colors.text}}>
          {menuItem.name}
        </Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-forward-outline" size={23} color={colors.primary} />
      </View>
    </TouchableOpacity>
  );
};

export default FlatListItem;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 15,
    fontSize: 19,
  },
});
