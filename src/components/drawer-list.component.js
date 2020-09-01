import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {
  Divider,
  Drawer,
  DrawerItem,
  Icon,
  Avatar,
  Text,
} from '@ui-kitten/components';

const PersonIcon = (props) => <Icon {...props} name="person" />;

const BellIcon = (props) => <Icon {...props} name="bell" />;

const ForwardIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;

const Header = (props) => (
  <React.Fragment>
    <ImageBackground style={[props.style, styles.header]}>
      <Avatar
        style={{marginRight: 10, marginLeft: -10}}
        size="giant"
        source={require('../assets/image/avatar.png')}
      />
      <View srtle={{flexDirection: 'row'}}>
        <Text category="h6">Shafa Naura</Text>
        <Text>Admin</Text>
      </View>
    </ImageBackground>
    <Divider />
  </React.Fragment>
);

export const DrawerList = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  return (
    <Drawer
      header={Header}
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}>
      <DrawerItem
        title="Users"
        accessoryLeft={PersonIcon}
        accessoryRight={ForwardIcon}
      />
      <DrawerItem
        title="Orders"
        accessoryLeft={BellIcon}
        accessoryRight={ForwardIcon}
      />
    </Drawer>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: '#F6F7F7',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
