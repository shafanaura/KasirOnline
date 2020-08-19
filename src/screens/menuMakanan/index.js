import React from 'react';
import {View} from 'react-native';

import Header from './extra/header';
import Products from './extra/products';

export default function MenuMakanan() {
  return (
    <View>
      <Header />
      <Products />
    </View>
  );
}
