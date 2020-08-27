import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Tab, TabView, Text} from '@ui-kitten/components';
import {Products} from './products';

export const TabBar = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <TabView
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}>
      <Tab title="Semua">
        <Layout style={styles.tabContainer}>
          <Products navigation={navigation} />
        </Layout>
      </Tab>
      <Tab title="Makanan">
        <Layout style={styles.tabContainer}>
          <Products navigation={navigation} />
        </Layout>
      </Tab>
      <Tab title="Minuman">
        <Layout style={styles.tabContainer}>
          <Products navigation={navigation} />
        </Layout>
      </Tab>
    </TabView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    minHeight: '100%',
  },
});
