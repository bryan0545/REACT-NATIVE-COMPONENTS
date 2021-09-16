import React, {useContext, useState} from 'react';
import {View, Text, ScrollView, RefreshControl} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {ThemeContext} from '../context/ThemeContext/ThemeContext';
import {styles} from '../theme/appTheme';

const PullRefreshScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const [refreshing, setRefreshing] = useState(false);
  const [texto, setTexto] = useState('');

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setTexto('Actualizo');
      setRefreshing(false);
    }, 1500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressBackgroundColor="white"
          colors={['purple', 'blue', 'white']}
          style={{backgroundColor: '#5856D6'}}
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />
        <Text
          style={{
            fontSize: 20,
            color: colors.text,
          }}>
          {texto}
        </Text>
      </View>
    </ScrollView>
  );
};

export default PullRefreshScreen;
