import React from 'react';
import {View, ScrollView} from 'react-native';
import {Button, Icon, Input} from '@ui-kitten/components';

import styles from './styles';
import AvatarsPict from '../../assets/image/avatarLand.svg';

const CubeIcon = (props) => <Icon name="cube" {...props} />;

const useInputState = (initialValue = '') => {
  const [value, setValue] = React.useState(initialValue);
  return {value, onChangeText: setValue};
};

const SignUpScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <AvatarsPict width="200" height="140" />
        </View>
        <View style={{padding: 20}}>
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
            style={styles.input}
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
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
