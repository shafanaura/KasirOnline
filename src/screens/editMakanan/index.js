import React from 'react';
import {
  Icon,
  Layout,
  Input,
  TopNavigation,
  TopNavigationAction,
  Radio,
  RadioGroup,
  Button,
  Text,
} from '@ui-kitten/components';
import {View, ImageBackground, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;
const TrashIcon = (props) => <Icon {...props} name="trash-2-outline" />;
const SaveIcon = (props) => <Icon {...props} name="save-outline" />;

const EditMakanan = () => {
  const renderBackAction = () => <TopNavigationAction icon={BackIcon} />;
  const [value, setValue] = React.useState('');
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <Layout level="1">
      <TopNavigation
        alignment="center"
        title="Edit Makanan"
        accessoryLeft={renderBackAction}
      />
      <View>
        <View style={styles.container}>
          <TouchableOpacity>
            <ImageBackground
              source={require('../../assets/image/nasigoreng.jpg')}
              style={styles.pict}>
              <View style={styles.pictContainer}>
                <Button style={{fontStyle: 'italic'}}>Foto sampul</Button>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <Input
            style={styles.input}
            label="Nama Produk"
            placeholder="Nasi Goreng"
          />
          <Input
            style={styles.input}
            label="Harga"
            placeholder="Rp 10.000,00"
          />
          <RadioGroup
            selectedIndex={selectedIndex}
            onChange={(index) => setSelectedIndex(index)}>
            <Radio>Populer</Radio>
            <Radio>Menu Utama</Radio>
            <Radio>Dessert</Radio>
          </RadioGroup>
        </View>
        <View style={styles.button}>
          <Button size="giant" status="danger" accessoryLeft={TrashIcon}>
            Hapus
          </Button>
          <Button size="giant" accessoryLeft={SaveIcon}>
            Simpan
          </Button>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'column',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 216,
    backgroundColor: '#25CB5C',
  },
  input: {
    margin: 5,
  },
  radio: {
    margin: 5,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  pict: {
    width: 150,
    height: 150,
  },
  pictContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
});

export default EditMakanan;
