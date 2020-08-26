import React from 'react';
import {View} from 'react-native';

import {Header} from './extra/header';
import {TabBar} from './extra/tabBar';

const MenuMakanan = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />
      <TabBar navigation={navigation} />
    </View>
  );
};

export default MenuMakanan;
