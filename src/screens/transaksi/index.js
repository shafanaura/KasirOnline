import React from 'react';
import {View} from 'react-native';
import {Header} from './extra/header';
import {Products} from './extra/products';

const Transaksi = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />
      <Products navigation={navigation} />
    </View>
  );
};

export default Transaksi;
