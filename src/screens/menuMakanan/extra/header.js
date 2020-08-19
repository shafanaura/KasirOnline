import React from 'react';
import {
  Icon,
  Layout,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
  Input,
  Tab,
  TabBar,
} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const MenuIcon = (props) => <Icon {...props} name="more-vertical" />;

const InfoIcon = (props) => <Icon {...props} name="info" />;

const LogoutIcon = (props) => <Icon {...props} name="log-out" />;

export default function Header() {
  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const MenuAction = () => (
    <React.Fragment>
      <Input minWidth={220} placeholder="cari 'makanan'" />
      <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
    </React.Fragment>
  );

  const RightActions = () => (
    <React.Fragment>
      <OverflowMenu
        anchor={MenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}>
        <MenuItem accessoryLeft={InfoIcon} title="About" />
        <MenuItem accessoryLeft={LogoutIcon} title="Logout" />
      </OverflowMenu>
    </React.Fragment>
  );

  const BackAction = ({navigation}) => (
    <React.Fragment>
      <TopNavigationAction icon={BackIcon} />
    </React.Fragment>
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <Layout style={styles.container} level="1">
      <TopNavigation
        alignment="center"
        accessoryLeft={BackAction}
        accessoryRight={RightActions}
      />
      <TabBar
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}>
        <Tab title="Populer" />
        <Tab title="Menu Utama" />
        <Tab title="Dessert" />
      </TabBar>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 128,
    padding: 10,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 0.5,
    paddingVertical: 28,
    paddingHorizontal: 16,
  },
  checkoutButton: {
    marginHorizontal: 16,
    marginVertical: 24,
  },
});
