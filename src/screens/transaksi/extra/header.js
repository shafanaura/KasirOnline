import React from 'react';
import {Icon, Layout, Input} from '@ui-kitten/components';
import {StyleSheet, View} from 'react-native';
import {ModalList} from '../../../components/modal.component';

export const Header = ({navigation}) => {
  return (
    <Layout style={styles.container} level="1">
      <View style={styles.top}>
        <Icon
          onPress={() => navigation.goBack()}
          fill="#000"
          style={styles.icon}
          name="arrow-back"
        />
        <Input minWidth={200} placeholder="mau cari apa?" />
        <ModalList navigation={navigation} />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 70,
    paddingTop: 10,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
});
