import React from 'react';
import {
  Icon,
  Layout,
  Button,
  Input,
  Tab,
  TabBar,
  Modal,
  Text,
  Card,
} from '@ui-kitten/components';
import {StyleSheet, View} from 'react-native';
import {ModalList} from '../../../components/modal.component';

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export const Header = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <Layout style={styles.container} level="1">
      <View style={styles.top}>
        <Button
          accessoryLeft={BackIcon}
          appearance="ghost"
          status="basic"
          onPress={() => navigation.goBack()}
        />
        <Input width={200} placeholder="mau cari apa?" />
        <ModalList navigation={navigation} />
      </View>
      <TabBar
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}>
        <Tab title="Populer" />
        <Tab title="Menu Utama" />
        <Tab title="Dessert" />
      </TabBar>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 100,
    paddingTop: 10,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  top: {
    flexDirection: 'row',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
