import React, {useContext} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {useForm} from '../hooks/useForm';
import CustomSwitch from '../components/CustomSwitch';
import {ThemeContext} from '../context/ThemeContext/ThemeContext';

const TextInputScreen = () => {
  const {form, onChange, isSuscribed} = useForm({
    nombre: '',
    telefono: '',
    correo: '',
    isSuscribed: false,
  });
  const {
    theme: {colors, dividerColor},
  } = useContext(ThemeContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="Text inputs" />
            <TextInput
              style={{
                ...stylesScreen.inputStyle,
                color: colors.text,
                borderColor: colors.text,
              }}
              placeholder="Ingrese su nombre"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'nombre')}
              placeholderTextColor={dividerColor}
            />
            <TextInput
              style={{
                ...stylesScreen.inputStyle,
                color: colors.text,
                borderColor: colors.text,
              }}
              placeholder="Ingrese su telefono"
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'telefono')}
              keyboardType="phone-pad"
              placeholderTextColor={dividerColor}
            />
            <TextInput
              style={{
                ...stylesScreen.inputStyle,
                color: colors.text,
                borderColor: colors.text,
              }}
              placeholder="Ingrese su correo"
              onChangeText={value => onChange(value, 'correo')}
              keyboardType="email-address"
              placeholderTextColor={dividerColor}
            />
            <View style={stylesScreen.switchRow}>
              <Text style={{...stylesScreen.switchText, color: colors.text}}>
                isHungry
              </Text>
              <CustomSwitch
                isOn={isSuscribed}
                onChange={value => onChange(value, 'isSuscribed')}
              />
            </View>
            <HeaderTitle title={JSON.stringify(form, null, 5)} />
            <View style={{height: 100}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TextInputScreen;

export const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
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
