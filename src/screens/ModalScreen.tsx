import React, {useState} from 'react';
import {View, Text, Button, Modal} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const openModal = () => {
    setIsVisible(true);
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal" />
      <Button title="Abrir modal" onPress={openModal} />

      <Modal animationType="fade" visible={isVisible} transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 300,
              height: 200,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              elevation: 10,
              borderRadius: 10,
            }}>
            <HeaderTitle title="Modal" />
            <Text>Mensaje modal</Text>
            <Button
              title="Cerrar"
              onPress={() => {
                setIsVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;
