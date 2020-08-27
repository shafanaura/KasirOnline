import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Layout, Tab, TabView, Text} from '@ui-kitten/components';
import {Products} from './products';

export const TabBar = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <TabView
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}>
      <Tab title="Populer">
        <View>
          <Products navigation={navigation} />
        </View>
      </Tab>
      <Tab title="Menu Utama">
        <View>
          <Products navigation={navigation} />
        </View>
      </Tab>
      <Tab title="Dessert">
        <View>
          <Products navigation={navigation} />
        </View>
      </Tab>
    </TabView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    minHeight: '100%',
  },
});
