import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Button} from '@ui-kitten/components';

export const ButtonFooter = ({navigation}) => {
  return (
    <View style={styles.footer}>
      <View style={styles.footer2}>
        <Text category="h6" style={styles.text}>
          Kembalian
        </Text>
        <Text category="h6" style={styles.text}>
          Rp 40.000
        </Text>
      </View>
      <Button onPress={() => navigation.navigate('Nota')}>Simpan</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'white',
    position: 'absolute',
    padding: 10,
    left: 0,
    right: 0,
    bottom: 0,
  },
  footer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
  },
});
