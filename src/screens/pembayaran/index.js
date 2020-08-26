import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from './extra/header';
import {Board} from './extra/board';
import {ButtonFooter} from './extra/footer';

const Pembayaran = ({navigation}) => {
  return (
    <React.Fragment>
      <Header />
      <Board navigation={navigation} />
      {/* <ButtonFooter navigation={navigation} /> */}
    </React.Fragment>
  );
};

export default Pembayaran;

const styles = StyleSheet.create({});
