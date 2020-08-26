import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Modal, Text, Icon} from '@ui-kitten/components';

const PlusIcon = (props) => <Icon {...props} name="plus" />;
const CloseIcon = (props) => <Icon {...props} name="close" />;

export const ModalList = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <View style={styles.container}>
      <Button
        accessoryLeft={PlusIcon}
        onPress={() => setVisible(true)}
        size="small"
      />

      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text category="h4">Pilih Meja</Text>
            <Button
              accessoryLeft={CloseIcon}
              status="basic"
              onPress={() => setVisible(false)}
            />
          </View>
          <View style={styles.modalButton}>
            <Button style={styles.button}>A1</Button>
            <Button style={styles.button}>A2</Button>
            <Button style={styles.button}>A3</Button>
            <Button style={styles.button}>A4</Button>
            <Button style={styles.button}>A5</Button>
          </View>
          <View style={styles.modalButton}>
            <Button style={styles.button}>B1</Button>
            <Button style={styles.button}>B2</Button>
            <Button style={styles.button}>B3</Button>
            <Button style={styles.button}>B4</Button>
            <Button style={styles.button}>B5</Button>
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
  modalButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    marginHorizontal: 5,
    marginVertical: 5,
  },
});
