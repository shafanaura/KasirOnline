import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {AppNavigator} from '../navigations/app.navigation';
import {default as theme} from '../../custom-theme.json';
import {default as mapping} from '../../custom-mapping.json';

export default () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={{...eva.light, ...theme}}
        customMapping={mapping}>
        <AppNavigator />
      </ApplicationProvider>
    </>
  );
};
