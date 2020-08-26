import React from 'react';
import {Icon, Layout, Button, Input} from '@ui-kitten/components';
import {StyleSheet, View, Text} from 'react-native';
import {ModalList} from '../../../components/modal.component';

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;
const MenuIcon = (props) => <Icon {...props} name="more-vertical" />;

export const Header = ({navigation}) => {
  return (
    <Layout style={styles.container} level="1">
      <View style={styles.top}>
        <Button
          accessoryLeft={BackIcon}
          appearance="ghost"
          status="basic"
          onPress={() => navigation.goBack()}
        />
        <Input width={200} placeholder="mau cari apa?" />
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
  },
});
