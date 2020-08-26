import React from 'react';
import {View, Text} from 'react-native';
import {Button, Icon} from '@ui-kitten/components';

import styles from './styles';
import Logo from '../../assets/image/kasironline.svg';
import Ilustrator from '../../assets/image/welcome.svg';

const GoogleIcon = (props) => <Icon name="google" {...props} />;

const LandingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Logo width="105" height="105" />
      <Ilustrator width="270" height="300" />
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          textAlign: 'center',
          fontSize: 20,
        }}>
        Kelola dan pantau bisnismu dengan mudah dari satu aplikasi
      </Text>
      <Button
        onPress={() => navigation.navigate('SignUp')}
        size="giant"
        style={styles.signInButton}
        accessoryLeft={GoogleIcon}>
        Masuk dengan Google
      </Button>
    </View>
  );
};

export default LandingScreen;
