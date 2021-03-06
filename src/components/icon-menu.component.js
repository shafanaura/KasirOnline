import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Text, Icon, TopNavigationAction, Layout} from '@ui-kitten/components';

import Food from '../assets/image/food.svg';
import Drink from '../assets/image/beer.svg';
import User from '../assets/image/user.svg';
import News from '../assets/image/news.svg';
import Chair from '../assets/image/chair.svg';

const IconMenu = (props) => {
  return (
    <View>
      <TouchableOpacity>
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const IconButton = ({navigation}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Food
            width="60"
            height="50"
            onPress={() => navigation.navigate('MenuMakanan')}
          />
          <IconMenu title="Makanan" />
        </View>
        <View style={{alignItems: 'center'}}>
          <Drink width="60" height="50" />
          <IconMenu title="Minuman" />
        </View>
        <View style={{alignItems: 'center'}}>
          <User width="60" height="50" />
          <IconMenu title="Pegawai" />
        </View>
        <View style={{alignItems: 'center'}}>
          <News width="60" height="50" />
          <IconMenu title="Laporan" />
        </View>
      </View>

      <View style={styles.container2}>
        <View style={{alignItems: 'center'}}>
          <Food
            width="60"
            height="50"
            onPress={() => navigation.navigate('MenuMakanan')}
          />
          <IconMenu title="Makanan" />
        </View>
        <View style={{alignItems: 'center'}}>
          <Drink width="60" height="50" />
          <IconMenu title="Minuman" />
        </View>
        <View style={{alignItems: 'center'}}>
          <User width="60" height="50" />
          <IconMenu title="Pegawai" />
        </View>
        <View style={{alignItems: 'center'}}>
          <News width="60" height="50" />
          <IconMenu title="Laporan" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  container2: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {fontFamily: 'Poppins-Regular', fontSize: 12, paddingTop: 10},
});
