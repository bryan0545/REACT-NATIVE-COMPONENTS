import React, {useContext, useRef, useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAnimation} from '../hooks/useAnimation';
import {StackScreenProps} from '@react-navigation/stack';
import {ThemeContext} from '../context/ThemeContext/ThemeContext';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

interface Props extends StackScreenProps<any, any> {}

const SlidesScreen = ({navigation}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const [activeItem, setActiveItem] = useState(0);
  const isVisible = useRef(false);
  const {opacity, fadeIn} = useAnimation();
  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          borderRadius: 15,
          padding: 40,
          width: screenWidth,
          height: screenHeight,
          alignItems: 'center',
        }}>
        <Image
          source={item.img}
          style={{
            width: 350,
            height: 400,
            justifyContent: 'center',
            resizeMode: 'center',
          }}
        />
        <Text style={{...stylesScreen.title}}>{item.title}</Text>
        <Text style={{...stylesScreen.subTitle, color: colors.text}}>
          {item.desc}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 50,
      }}>
      <Carousel
        data={items}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenHeight}
        layout="default"
        onSnapToItem={index => {
          setActiveItem(index);
          if (index === items.length - 1) {
            fadeIn();
            isVisible.current = true;
          }
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          alignItems: 'center',
        }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeItem}
          dotStyle={{
            width: 15,
            backgroundColor: '#5856D6',
            height: 15,
            borderRadius: 10,
          }}
        />
        <Animated.View style={{opacity}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              if (isVisible.current) {
                navigation.navigate('HomeScreen');
              }
            }}
            style={{
              width: 110,
              height: 40,
              backgroundColor: '#5856D6',
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, color: 'white'}}>Entrar</Text>
            <Icon name="chevron-forward-outline" size={30} color="white" />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default SlidesScreen;

export const stylesScreen = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 15,
  },
});
