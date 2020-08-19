import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerList} from '../../components/drawer-list.component';
import DashboardScreen from './Dashboard';

const {Navigator, Screen} = createDrawerNavigator();

const DrawerNavigator = () => (
  <>
    <Navigator drawerContent={(props) => <DrawerList {...props} />}>
      <Screen name="Dashboard" component={DashboardScreen} />
    </Navigator>
  </>
);

export default function Dashboard() {
  return (
    <React.Fragment>
      <DrawerNavigator />
    </React.Fragment>
  );
}
