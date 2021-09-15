import React, {useState} from 'react';
import {View, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import FadeImage from '../components/FadeImage';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const renderItem = (item: number) => {
    return (
      <FadeImage
        uri={`https://picsum.photos/id/${item}/500/400`}
        style={{
          width: '100%',
          height: 400,
          marginBottom: 10,
        }}
      />
    );
  };

  return (
    <View style={styles.globalMargin}>
      <FlatList
        ListHeaderComponent={() => <HeaderTitle title="InfiniteScrollScreen" />}
        showsVerticalScrollIndicator={false}
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={30} color="#5856D6" />
          </View>
        )}
      />
    </View>
  );
};

export default InfiniteScrollScreen;

export const stylesScreen = StyleSheet.create({
  texrItem: {
    backgroundColor: 'green',
    height: 130,
  },
});
