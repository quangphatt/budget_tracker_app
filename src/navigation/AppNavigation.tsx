import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AppNavigation = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'pink', flex: 1 }}>
      <Text>AppNavigation</Text>
    </SafeAreaView>
  );
};

export default AppNavigation;
