import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

const NavigationPage = () => {
  return (
    <View>
      <Text>NavigationPage</Text>
      <Button icon="camera">open camera</Button>
    </View>
  );
};

export default NavigationPage;

const styles = StyleSheet.create({});
