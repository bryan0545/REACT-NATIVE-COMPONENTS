import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {MenuItem} from '../interfaces/appInterfaces';

interface Props {
  menuItem: MenuItem;
}

const FlatListItem = ({menuItem}: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(menuItem.component);
      }}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} size={23} />
        <Text style={styles.itemText}>{menuItem.name}</Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-forward-outline" size={23} />
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
