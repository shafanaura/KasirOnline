import React from 'react';
import {View, Text} from 'react-native';
import {Button, Icon, Input} from '@ui-kitten/components';

import styles from './styles';
import AvatarsPict from '../../assets/image/avatarLand.svg';

const CubeIcon = (props) => <Icon name="cube" {...props} />;

const useInputState = (initialValue = '') => {
  const [value, setValue] = React.useState(initialValue);
  return {value, onChangeText: setValue};
};

export default function SignUpScreen({navigation}) {
  const nameInputState = useInputState();
  const titleInputState = useInputState();
  const descInputState = useInputState();

  return (
    <View>
      <View style={styles.headerContainer}>
        <AvatarsPict width="200" height="140" />
      </View>
      <View style={styles.container}>
        <Input
          style={styles.input}
          size="large"
          placeholder="Nama Toko"
          {...nameInputState}
        />
        <Input
          style={styles.input}
          size="large"
          placeholder="Pemilik Toko"
          {...titleInputState}
        />
        <Input
          multiline={true}
          style={styles.input}
          textStyle={{minHeight: 120}}
          placeholder="Deskripsikan toko anda"
          {...descInputState}
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
  );
}
