import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  title: string;
}

const HeaderTitle = ({title}: Props) => {
  const {top: homeTop} = useSafeAreaInsets();
  return (
    <View style={{marginTop: homeTop + 20, marginBottom: 20}}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HeaderTitle;
