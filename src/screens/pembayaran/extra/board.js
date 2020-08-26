import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Text, Input, Button, Layout} from '@ui-kitten/components';
import {List} from './list';
import {ButtonFooter} from './footer';
import {ModalList} from './modal';

export const Board = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{justifyContent: 'space-between'}}>
          <View>
            <Text category="h4">Daftar Pesanan</Text>
          </View>
          <List />
          <View style={styles.body}>
            <Text category="h5">Total Tagihan</Text>
            <Text category="h5">Rp 20.000</Text>
          </View>
          <View>
            <Text>Uang yang dibayarkan</Text>
            <Input />
            <ScrollView horizontal>
              <Button style={styles.button} size="small">
                Uang Pas
              </Button>
              <Button style={styles.button} size="small">
                Rp 10.000
              </Button>
              <Button style={styles.button} size="small">
                Rp 20.000
              </Button>
              <Button style={styles.button} size="small">
                Rp 50.000
              </Button>
              <Button style={styles.button} size="small">
                Rp 100.000
              </Button>
            </ScrollView>
          </View>
          <View style={styles.chair1}>
            <Text>Meja</Text>
            <View style={styles.chair2}>
              <Text category="h4">A1</Text>
              <ModalList />
            </View>
          </View>
          <View>
            <Text>Catatan</Text>
            <Input multiline={true} textStyle={{minHeight: 70}} />
          </View>
        </View>
      </ScrollView>
      <ButtonFooter navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
  },
  body: {alignItems: 'center'},
  button: {
    margin: 5,
  },
  chair1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chair2: {
    flexDirection: 'row',
  },
});
