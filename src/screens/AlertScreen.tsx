import React from 'react';
import {Alert, Button, View} from 'react-native';
import prompt from 'react-native-prompt-android';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert('Peligro!', 'Mensaje de alerta', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };
  const showPrompt = () => {
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: '',
        placeholder: 'placeholder',
      },
    );
  };
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Mostrar alerta" onPress={showAlert} />
      <Button title="Mostrar Prompt" onPress={showPrompt} />
    </View>
  );
};

export default AlertScreen;
