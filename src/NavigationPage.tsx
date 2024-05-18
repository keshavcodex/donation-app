import * as React from 'react';
import {View, Text} from 'react-native';
import Home from './screens/Home';
import Account from './screens/Account';

const NavigationPage = () => {
  return (
    <View>
        <Home />
        <Account />
      <Text>navigation main page</Text>
    </View>
  );
};

export default NavigationPage;
