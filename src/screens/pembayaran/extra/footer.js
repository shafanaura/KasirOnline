import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '@ui-kitten/components';

export const ButtonFooter = ({navigation}) => {
  return (
    <View style={styles.footer}>
      <View style={styles.footer2}>
        <Text>Kembalian</Text>
        <Text>Rp 40.000</Text>
      </View>
      <Button onPress={() => navigation.navigate('Nota')}>Simpan</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 20,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  footer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
