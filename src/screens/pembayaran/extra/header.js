import React from 'react';
import {View, Text} from 'react-native';
import {TopNavigation, Icon, TopNavigationAction} from '@ui-kitten/components';

export const Header = ({navigation}) => {
  const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

  const renderBackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );
  return (
    <TopNavigation
      alignment="center"
      title="Pembayaran"
      accessoryLeft={renderBackAction}
    />
  );
};
