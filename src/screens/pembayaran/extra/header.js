import React from 'react';
import {
  Icon,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const BackAction = () => <TopNavigationAction icon={BackIcon} />;

export const Header = () => (
  <TopNavigation accessoryLeft={BackAction} title="Pembayaran" />
);
