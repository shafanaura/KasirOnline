import React from 'react';
import {Button, Icon, List, ListItem, Avatar} from '@ui-kitten/components';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const data = new Array(12).fill({
  title: 'Nasi Goreng',
  description: 'Rp 10.000,00',
});

const renderItemAccessory = ({navigation}) => (
  <TouchableOpacity onPress={() => navigation.navigate('EditFood')}>
    <Icon style={styles.icon} fill="#25CB5C" name="edit-2-outline" />
  </TouchableOpacity>
);

const renderItemImage = (props) => (
  <Avatar
    {...props}
    style={[props.style, {tintColor: null}]}
    shape="rounded"
    style={{size: 0}}
    source={require('../../../assets/image/nasigoreng.jpg')}
  />
);

const renderItem = ({item}) => (
  <ListItem
    title={`${item.title}`}
    description={`${item.description}`}
    accessoryLeft={renderItemImage}
    accessoryRight={renderItemAccessory}
  />
);

const Products = () => {
  return <List style={styles.container} data={data} renderItem={renderItem} />;
};

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  container: {
    height: '100%',
  },
});

export default Products;
