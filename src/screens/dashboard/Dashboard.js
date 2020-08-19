import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Text, Icon, TopNavigationAction, Layout} from '@ui-kitten/components';
import {CardAccessoriesShowcase} from '../../components/card.component';

import Food from '../../assets/image/food.svg';
import Drink from '../../assets/image/beer.svg';
import User from '../../assets/image/user.svg';
import News from '../../assets/image/news.svg';
import Chair from '../../assets/image/chair.svg';

const MenuIcon = (props) => <Icon {...props} name="menu-2" />;

const IconMenu = (props) => {
  return (
    <View>
      <TouchableOpacity>
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const DashboardScreen = ({navigation}) => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <TopNavigationAction
          icon={MenuIcon}
          onPress={() => navigation.openDrawer()}
        />
      </View>
      <View style={styles.container}>
        <CardAccessoriesShowcase />

        <View>
          <Layout style={styles.topContainer} level="1">
            <View>
              <Food
                width="60"
                height="50"
                onPress={() => navigation.navigate('MenuMakanan')}
              />
              <IconMenu title="Makanan" />
            </View>
            <View>
              <Drink width="60" height="50" />
              <IconMenu title="Minuman" />
            </View>
            <View>
              <User width="60" height="50" />
              <IconMenu title="Pegawai" />
            </View>
            <View>
              <News width="60" height="50" />
              <IconMenu title="Laporan" />
            </View>
          </Layout>

          <Layout style={styles.topContainer} level="1">
            <View>
              <Food
                width="60"
                height="50"
                onPress={() => navigation.navigate('MenuMakanan')}
              />
              <IconMenu title="Makanan" />
            </View>
            <View>
              <Drink width="60" height="50" />
              <IconMenu title="Minuman" />
            </View>
            <View>
              <User width="60" height="50" />
              <IconMenu title="Pegawai" />
            </View>
            <View>
              <News width="60" height="50" />
              <IconMenu title="Laporan" />
            </View>
          </Layout>
        </View>
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
