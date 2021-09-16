import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ThemeContext} from '../context/ThemeContext/ThemeContext';

const ChangeThemeScreen = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Change theme" />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={setDarkTheme}
          style={{
            width: 120,
            height: 40,
            backgroundColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
            }}>
            Dark
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={setLightTheme}
          style={{
            width: 120,
            height: 40,
            backgroundColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
            }}>
            Light
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangeThemeScreen;
