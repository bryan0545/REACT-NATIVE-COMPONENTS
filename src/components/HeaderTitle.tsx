import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../context/ThemeContext/ThemeContext';

interface Props {
  title: string;
}

const HeaderTitle = ({title}: Props) => {
  const {top: homeTop} = useSafeAreaInsets();
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={{marginTop: homeTop + 20, marginBottom: 20}}>
      <Text style={{...styles.title, color: colors.text}}>{title}</Text>
    </View>
  );
};

export default HeaderTitle;
