import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon, TopNavigationAction} from '@ui-kitten/components';
import {CardAccessoriesShowcase} from '../../components/card.component';
import {IconButton} from '../../components/icon-menu.component';

const MenuIcon = (props) => <Icon {...props} name="menu-2" />;

const DashboardScreen = ({navigation}) => {
  return (
    <View navigation={navigation}>
      <View style={styles.headerContainer}>
        <TopNavigationAction
          icon={MenuIcon}
          onPress={() => navigation.openDrawer()}
        />
      </View>
      <View style={styles.container}>
        <CardAccessoriesShowcase />
        <IconButton navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF',
    padding: 20,
    height: '100%',
  },
  headerContainer: {
    backgroundColor: '#FFFF',
    paddingTop: 20,
    paddingLeft: 10,
  },
  signInButton: {
    marginVertical: 15,
    marginHorizontal: 16,
  },
  input: {
    marginTop: 12,
  },
  profileAvatar: {
    width: 116,
    height: 116,
    borderRadius: 58,
    alignSelf: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  text: {fontFamily: 'Poppins-Regular', fontSize: 14, paddingTop: 10},
});

export default DashboardScreen;
