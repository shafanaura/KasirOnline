import React from 'react';
import {Drawer, DrawerItem, Icon, Avatar, Layout} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

const HomeIcon = (props) => <Icon {...props} name="home-outline" />;

const ArchiveIcon = (props) => <Icon {...props} name="archive-outline" />;

const BookmarkIcon = (props) => <Icon {...props} name="bookmark-outline" />;

const SettingsIcon = (props) => <Icon {...props} name="settings-outline" />;

const ForwardIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;

const Header = () => (
  <Layout style={styles.container} level="1">
    <Avatar size="large" source={require('../assets/image/avatar.png')} />
  </Layout>
);

export const DrawerList = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  return (
    <Drawer
      header={Header}
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}>
      <DrawerItem
        title="Beranda"
        accessoryLeft={HomeIcon}
        accessoryRight={ForwardIcon}
      />
      <DrawerItem
        title="Riwayat Transaksi"
        accessoryLeft={ArchiveIcon}
        accessoryRight={ForwardIcon}
      />
      <DrawerItem
        title="Laporan"
        accessoryLeft={BookmarkIcon}
        accessoryRight={ForwardIcon}
      />
      <DrawerItem
        title="Pengaturan"
        accessoryLeft={SettingsIcon}
        accessoryRight={ForwardIcon}
      />
    </Drawer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 8,
    justifyContent: 'space-between',
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '15',
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#F4F4F4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  header: {
    height: 128,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
});
