import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Layout, Text} from '@ui-kitten/components';

const Footer = (props) => (
  <View {...props} style={[props.style, styles.footerContainer]}>
    <Text style={{fontFamily: 'Poppins-Light', fontSize: 18}}>
      Total Transaksi :
    </Text>
    <Text style={{fontFamily: 'Poppins-Bold', fontSize: 24}}> 148</Text>
  </View>
);

export const CardAccessoriesShowcase = () => (
  <React.Fragment>
    <Layout style={styles.topContainer} level="1">
      <Card style={styles.card} footer={Footer}>
        <Text style={{fontFamily: 'Poppins-Light', fontSize: 18}}>
          Pemasukan
        </Text>
        <Text style={{fontFamily: 'Poppins-Bold', fontSize: 24}}>
          Rp 4.250.500
        </Text>
      </Card>
    </Layout>
  </React.Fragment>
);

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  footerControl: {
    marginHorizontal: 2,
  },
});
