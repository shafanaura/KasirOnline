import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Modal, Card, Text, Button, Icon, Divider} from '@ui-kitten/components';

const MenuIcon = (props) => <Icon {...props} name="shopping-bag-outline" />;

export const ModalList = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <View>
      <Icon
        fill="#000"
        style={styles.icon}
        name="shopping-bag-outline"
        onPress={() => setVisible(true)}
      />
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
          <Text category="h4" style={{fontFamily: 'Poppins-SemiBold'}}>
            Daftar Pesanan
          </Text>
          <Divider style={{height: 5}} />
          <View style={styles.list}>
            <Text>Nasi Goreng</Text>
            <Text>5</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              jutifyContent: 'space-between',
            }}>
            <Button
              style={styles.button}
              onPress={() => setVisible(false)}
              status="warning">
              Kembali
            </Button>
            <Button
              style={styles.button}
              onPress={() => (
                navigation.navigate('Pembayaran'), setVisible(false)
              )}>
              Checkout
            </Button>
          </View>
        </Card>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  button: {
    margin: 10,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 32,
    height: 32,
  },
});
