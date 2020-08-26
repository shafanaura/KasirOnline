import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {List, ListItem, Button, Icon, Layout} from '@ui-kitten/components';

import dataList from './data';

export const Products = ({navigation}) => {
  const renderItem = ({item, index}) => (
    <ScrollView>
      <ListItem style={{justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <Image source={item.image} style={styles.img} />
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
        <Button size="small" onPress={() => navigation.navigate('EditMakanan')}>
          Edit
        </Button>
      </ListItem>
    </ScrollView>
  );

  return (
    <List style={styles.container} data={dataList} renderItem={renderItem} />
  );
};

const styles = StyleSheet.create({
  img: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 15,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  price: {
    fontFamily: 'Poppins-Medium',
  },
});
