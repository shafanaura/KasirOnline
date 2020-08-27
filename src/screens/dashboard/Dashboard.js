import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon, Button, Text} from '@ui-kitten/components';
import {CardAccessoriesShowcase} from '../../components/card.component';
import {IconButton} from '../../components/icon-menu.component';

const NavigationIcon = (props) => <Icon {...props} name="navigation-2" />;

const DashboardScreen = ({navigation}) => {
  return (
    <View navigation={navigation} style={styles.container}>
      <Icon
        onPress={() => navigation.openDrawer()}
        fill="#000"
        style={styles.icon}
        name="menu-2"
      />
      <Text style={styles.text}>Senin, 17 Agustus 2020</Text>
      <CardAccessoriesShowcase />
      <Text style={styles.text}>Menu</Text>
      <IconButton navigation={navigation} />
      <Button
        size="giant"
        accessoryRight={NavigationIcon}
        onPress={() => navigation.navigate('Transaksi')}>
        Mulai Jualan
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF',
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  text: {fontFamily: 'Poppins-SemiBold', fontSize: 16},
  icon: {
    width: 30,
    height: 30,
  },
});

export default DashboardScreen;
