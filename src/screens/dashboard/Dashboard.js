import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon, TopNavigationAction, Button, Text} from '@ui-kitten/components';
import {CardAccessoriesShowcase} from '../../components/card.component';
import {IconButton} from '../../components/icon-menu.component';

const MenuIcon = (props) => <Icon {...props} name="menu-2" />;
const NavigationIcon = (props) => <Icon {...props} name="navigation-2" />;

const DashboardScreen = ({navigation}) => {
  return (
    <View navigation={navigation} style={styles.container}>
      <TopNavigationAction
        icon={MenuIcon}
        onPress={() => navigation.openDrawer()}
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
});

export default DashboardScreen;
