import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Button, Icon, Input} from '@ui-kitten/components';

import AvatarsPict from '../../assets/image/avatarLand.svg';

const CubeIcon = (props) => <Icon name="cube" {...props} />;

const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <AvatarsPict width="200" height="140" />
      </View>
      <Input
        label="Nama Toko"
        style={styles.input}
        size="large"
        placeholder="ex : Toko Mawar Merah"
      />
      <Input
        label="Pemilik"
        style={styles.input}
        size="large"
        placeholder="ex : Budi Mulya"
      />
      <Input
        label="Deskripsi toko anda"
        multiline={true}
        style={styles.input2}
        textStyle={{minHeight: 120}}
        placeholder="Menjual beraneka macam kebutuhan rumah dibidang properti"
      />
      <Button
        onPress={() => navigation.navigate('Dashboard')}
        size="giant"
        style={styles.signInButton}
        accessoryLeft={CubeIcon}>
        Lanjut
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25CB5C',
    height: '30%',
  },
  avatar: {
    alignItems: 'center',
  },
});

export default SignUpScreen;
