import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Text, Input, Button, Layout} from '@ui-kitten/components';
import {List} from './list';
import {ModalList} from './modal';

export const Board = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.text} category="h4">
              Daftar Pesanan
            </Text>
          </View>
          <List />
          <View style={styles.body}>
            <Text style={styles.text} category="h5">
              Total Tagihan
            </Text>
            <Text style={styles.text} category="h5">
              Rp 20.000
            </Text>
          </View>
          <View>
            <Text style={styles.text}>Uang yang dibayarkan</Text>
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
            <Text style={styles.text}>Meja</Text>
            <View style={styles.chair2}>
              <Text style={styles.text} category="h4">
                A1
              </Text>
              <ModalList />
            </View>
          </View>
          <View style={{marginBottom: 100}}>
            <Text style={styles.text}>Catatan</Text>
            <Input multiline={true} textStyle={{minHeight: 70}} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  body: {alignItems: 'center', marginVertical: 20},
  button: {
    margin: 5,
  },
  chair1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    alignItems: 'center',
  },
  chair2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    alignItems: 'center',
  },
});
