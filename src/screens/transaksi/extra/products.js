import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {List, ListItem, Button, Icon, Layout} from '@ui-kitten/components';

import dataList from './data';

const PlusIcon = (props) => <Icon {...props} name="plus" />;

export const Products = ({navigation}) => {
  const [counter, setCounter] = React.useState(0);

  const renderItem = ({item, index}) => (
    <ScrollView>
      <View style={{flexDirection: 'row'}}>
        <ListItem style={{justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image source={item.image} style={styles.img} />
            <View style={{minWidth: 180, maxWidth: 180}}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon
                onPress={() => setCounter(counter - 1)}
                style={styles.icon}
                fill="#25CB5C"
                name="minus-square"
              />
              <Text style={{marginHorizontal: 10}}>{counter}</Text>
              <Icon
                onPress={() => setCounter(counter + 1)}
                style={styles.icon}
                fill="#25CB5C"
                name="plus-square"
              />
            </View>
          </View>
        </ListItem>
      </View>
    </ScrollView>
  );

  return (
    <List style={styles.container} data={dataList} renderItem={renderItem} />
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
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
  icon: {
    width: 32,
    height: 32,
  },
});
