import React, {useContext} from 'react';
import {View, Text, SectionList} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';
import {ThemeContext} from '../context/ThemeContext/ThemeContext';
import {styles} from '../theme/appTheme';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Superman',
      'Robin',
      'Superman',
      'Robin',
      'Superman',
      'Robin',
      'Superman',
      'Robin',
      'Superman',
      'Robin',
      'Superman',
      'Robin',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: ['Antman', 'Thor', 'Spiderman', 'Antman'],
  },
  {
    casa: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Thor',
      'Spiderman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
    ],
  },
];

const SectionListScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <SectionList
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => <HeaderTitle title="Section list" />}
        stickySectionHeadersEnabled
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: colors.background}}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        renderItem={({item}) => (
          <Text style={{color: colors.text}}>{item}</Text>
        )}
        sections={casas}
        renderSectionFooter={({section}) => (
          <View style={{marginVertical: 20}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: colors.text,
              }}>
              Total: {section.data.length}
            </Text>
          </View>
        )}
        ItemSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SectionListScreen;
