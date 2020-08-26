import React from 'react';
import {ScrollView} from 'react-native';
import {
  Icon,
  Menu,
  Text,
  MenuGroup,
  MenuItem,
  Layout,
} from '@ui-kitten/components';

const SmartphoneIcon = (props) => <Icon {...props} name="checkmark-square" />;

const StarIcon = (props) => <Icon {...props} name="arrow-right-outline" />;

export const List = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  return (
    <Layout>
      <Menu
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}>
        <MenuGroup title="Makanan" accessoryLeft={SmartphoneIcon}>
          <MenuItem title="Nasi Goreng" accessoryLeft={StarIcon} />
          <MenuItem title="Ca Kangkung" accessoryLeft={StarIcon} />
        </MenuGroup>
        <MenuGroup title="Minuman" accessoryLeft={SmartphoneIcon}>
          <MenuItem title="UI Kitten" accessoryLeft={StarIcon} />
          <MenuItem title="Kitten Tricks" accessoryLeft={StarIcon} />
        </MenuGroup>
      </Menu>
    </Layout>
  );
};
