import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Button} from '@ui-kitten/components';

const Nota = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text category="h4" style={styles.title}>
          Berhasil Simpan
        </Text>
      </View>
      <View>
        <Button style={styles.button} appearance="ghost">
          Cetak Struk
        </Button>
        <Button style={styles.button} appearance="ghost">
          Cetak Tiket Pesanan
        </Button>
        <Button
          onPress={() => navigation.navigate('Transaksi')}
          style={styles.button}>
          Transaksi Baru
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
    padding: 20,
  },
  body: {
    alignItems: 'center',
  },
  button: {
    marginVertical: 5,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
  },
});

export default Nota;
